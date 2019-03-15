/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models');

const BAD_USER_OR_PASSWORD = 'Incorrect username or password';
const EMAIL_EXISTS = 'That email address is already taken!';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

// Register User (Create a new user)
passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      db.User.findOrCreate({
        where: { userEmail: req.body.email.toLowerCase() },
        defaults: {
          userEmail: req.body.email.toLowerCase(),
          userLogin: req.body.username,
          userPass: password,
          userRegistered: new Date(),
        },
      })
        .spread((user, created) => {
          if (user && !created) {
            return done(null, false, { message: EMAIL_EXISTS });
          }

          if (user && created) {
            return done(null, user);
          }
        })
        .catch((error) => done(error, false));
    }
  )
);

// Login
passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    async (username, password, done) => {
      try {
        const user = await db.User.findOne({ where: { userLogin: username } });

        if (user === null) {
          return done(null, false, { message: BAD_USER_OR_PASSWORD });
        } else {
          const isMatch = await user.validPassword(password);

          if (!isMatch) {
            return done(null, false, { message: BAD_USER_OR_PASSWORD });
          }

          return done(null, user);
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// JWT
passport.use(
  'jwt',
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await db.User.findOne({
        where: { userLogin: jwtPayload.userLogin },
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);

module.exports = passport;
