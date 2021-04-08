
console.log("inside dg - config 1");
const { Pool } = require("pg");

// const config = {
//     host: 'localhost',
//     port: '5432',
//     database: 'database',
//     user: 'postgres',
//     password: 'password'
// };
// const pool = new Pool(config);

const config = "type url here";
const pool = new Pool({ connectionString: config,ssl: { rejectUnauthorized: false } });
module.exports = pool;