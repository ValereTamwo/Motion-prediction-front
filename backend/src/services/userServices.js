import connection from "../config/server.js";
import { createCustomError } from "../error/Customerror.js";

export async function create(username, email, password) {
  try {
    if (username === undefined || email === undefined || password === undefined) {
      throw createCustomError('All fields are required', 400);
    }


    const querySelect = 'SELECT * FROM Users WHERE username = ?';
    const queryInsert = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';

    await connection.query(queryInsert, [username, email, password]);

    const [rows] = await connection.query(querySelect, [username]);

    console.log(rows);

    return rows[0];
  } catch (error) {
    throw createCustomError(error.message, error.statusCode || 500);
  
  }
}

export async function login(username, password) {
    try {
      if (!username || !password) {
        throw createCustomError('Username and password are required', 400);
      }
      const querySelect = 'SELECT * FROM Users WHERE username = ? AND password = ?';
      const [rows] = await connection.query(querySelect, [username, password]);
      
      if (rows.length === 0) {
        throw createCustomError('Invalid username or password', 401);
      }
      
      return rows[0];
    } catch (error) {
      throw createCustomError(error.message, error.statusCode || 500);
    } 
  }
