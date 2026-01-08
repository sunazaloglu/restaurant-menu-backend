import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
