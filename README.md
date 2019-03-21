# YourScore

The simple way to track your music library.

## About this Project

### Purpose/Goals

Track the collection of sheet music scores used by choral and other music arts organizations.

- The data tracked per score is as follows:
  - Title
  - Description
  - Voices
  - Duration
  - Difficulty
  - Style
  - Publisher
  - Publication Date
  - Number of copies purchased
  - The price per copy
  - Composers
  - Genres
  - Accompaniments
  - Arrangers
  - Lyricists
  - Editors
  - Occasions
- The application should allow for associating the event(s) where a particular title was performed.
- The application should allow for tracking the assignment and return of music to the individual performers (members).
- The application must implement authentication.
- The application should allow for different role types and limit the data or functions accessible based on those roles.

## The Team

### Richard Cyrus

- Provided the base structure for the application. The idea for this application was based on a project on his list from a non-profit with which he volunteers.

### Rojin Pourkhomami

- Provided the UI design for this project.

### Alexis Rogers

- Along with Rojin, provided the UI design for the project, as well as the application name and logo.

### Santiago Sepulveda

- Took the inspiration of the Music Library list display, and incorporated the filtering capabilities and the detail page for a Score from the table.

# Technologies Used

- [axios](https://github.com/axios/axios 'Promise based HTTP client for the browser and node.js')
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js 'A library to help you hash passwords.')
- [dotenv](https://github.com/motdotla/dotenv 'Loads environment variables from .env for nodejs projects')
- [express](https://expressjs.com/ 'Fast, unopinionated, minimalist web framework for Node.js')
- [helmet](https://helmetjs.github.io/ 'Express.js security with HTTP headers')
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken 'JsonWebToken implementation for node.js')
- [mysql](https://www.mysql.com/)
- [Passport](http://www.passportjs.org/ 'Simple, unobtrusive authentication for Node.js')
- [sequelize](http://docs.sequelizejs.com/ 'Sequelize is a promise-based Node.js ORM')
- [formik](https://jaredpalmer.com/formik/ 'Build forms in React, without the tears')
- [reactjs](https://reactjs.org/ 'A JavaScript library for building user interfaces')
- [react-bootstrap](https://react-bootstrap.github.io/ 'The most popular front-end framework rebuilt for React.')
- [react-fontawesome](https://github.com/FortAwesome/react-fontawesome 'Font Awesome 5 React component')
- [react-router](https://reacttraining.com/react-router/)
- [react-table](https://github.com/tannerlinsley/react-table/tree/v6 'Hooks for building fast and extendable tables and datagrids for React ')
- [yup](https://github.com/jquense/yup 'Dead simple Object schema validation')

# Developer Setup

1. Clone the Repository and checkout or create the branch to work on.
2. Copy the `env.example` file and save it as `.env`.
3. Update the `SESSION_SECRET` value in the `.env` file. The Session Secret should be a very long random string.
4. Update the `JWT_SECRET` value in the `.env` file. The JSON Web Token Secret should be a very long random string.
5. Update the `SEED_USER_PASSWORD` value in the `.env` file. This will become the password for the initial user created when seeding the database.
6. Update the `MYSQLDB_URL` to point to your local copy of the database.
   The format of the MySQL URL is `mysql://user:password@host/database` where:
   - `user`: is the user name to access the database.
   - `password`: is the password to access the database. If providing the password it is `mysql://user:password@...`
   - `host`: the the hostname of IP address of the MySQL database server.
   - `database`: is the name of the database.
7. From the shell, in the project folder, enter `yarn` to install the project dependencies.
8. At the shell prompt enter `./node_modules/.bin/sequelize db:create`
9. Once the dependencies have been installed, type `yarn start` to launch the application.

# Preparing to Seed the Development Database

In the development environment, sequelize-cli is configured to store the tracking information in a local JSON file. To see the database after cloning the repository, perform the following steps.

1. From a shell in the project folder, enter the following commands to put sample information in the database.

    ```bash
    ./node_modules/.bin/sequelize db:seed --seed 20190308184118-async-add-sheet-music
    ./node_modules/.bin/sequelize db:seed --seed 20190313232716-add-user
    ./node_modules/.bin/sequelize db:seed --seed 20190315145803-add-performances
    ./node_modules/.bin/sequelize db:seed --seed 20190315145808-add-members
    ./node_modules/.bin/sequelize db:seed --seed 20190315145751-add-user-roles
    ./node_modules/.bin/sequelize db:seed --seed 20190315164823-associate-music-to-performances
    ```

2. Once all of the seed files have been executed, you should be able to login to the application. The default username is `admin`, and the password is what you defined in the `.env` file as the `SEED_USER_PASSWORD`.
