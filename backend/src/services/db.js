const { Pool } = require('pg');

const defaultConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'movie_platform',
};

const createPool = () => {
  const pool = new Pool(defaultConfig);
  pool.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error('Unexpected PG pool error', err);
  });
  return pool;
};

module.exports = { createPool };
