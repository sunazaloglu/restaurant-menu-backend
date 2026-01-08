import knex from "knex";
import knexfile from "../../knexfile.js";

const environment = process.env.NODE_ENV || "development";

const knexInstance = knex(knexfile[environment]);

export default knexInstance;
