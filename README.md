# Developer Setup

1. Clone the Repository and checkout or create the branch to work on.
2. Copy the `env.example` file and save it as `.env`.
3. Update the `SESSION_SECRET` value in the `.env` file. The Session Secret should be a very long random string.
4. Update the `MYSQLDB_URL` to point to your local copy of the database.
   The format of the MySQL URL is `mysql://<user>[:<password>]@<host>/<database>` where:
    `<user>`: is the user name to access the database.
    `<password>`: is the password to access the database. If providing the password it is `mysql://user:password@...`
    `<host>`: the the hostname of IP address of the MySQL database server.
    `<database>`: is the name of the database.
5. From the shell, in the project folder, enter `yarn` to install the project dependencies.
6. At the shell prompt enter `./node_modules/.bin/sequelize db:create`
7. Once the dependencies have been installed, type `yarn start` to launch the application.
