const mysql = require('mysql2/promise') // ใช้ promise เพื่อให้สามารถใช้ async/await ได้






const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'tutorial',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;