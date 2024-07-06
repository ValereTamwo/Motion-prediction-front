import mysql from 'mysql2';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '#Merveille95',
  database: 'MotionPrediction'
}).promise();



export default connection;
