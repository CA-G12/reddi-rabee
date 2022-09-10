const {Pool} = require('pg');

const {
  NODE_ENV, DEV_DATABASE_URL, TEST_DATABASE_URL, DATABASE_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'development':
    connectionString = DEV_DATABASE_URL;
    break;
  case 'test':
    connectionString = TEST_DATABASE_URL;
    break;
  default:
    throw new ReferenceError('The NODE_ENV selection is invalid');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
