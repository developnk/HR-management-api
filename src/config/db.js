// config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// middleware/queryWrapper.js
const queryWrapper = (queryFunc) => async (req, res, next) => {
      try {
        const result = await queryFunc(req, res, next);
        res.json(result);
      } catch (error) {
        next(error);
      }
    };
    
//     module.exports = queryWrapper;
    

module.exports = {pool , queryWrapper};
