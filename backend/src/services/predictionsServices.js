import connection from "../config/server.js";
import { createCustomError } from "../error/Customerror.js";


export async function addPredict(video_id, user_id, title, predict_url) {
  try {
    if (!video_id || !user_id || !title || !predict_url) {
      throw createCustomError('All fields are required', 400);
    }

    const queryInsert = 'INSERT INTO Predictions (video_id, user_id, title, predict_url) VALUES (?, ?, ?, ?)';
    await connection.query(queryInsert, [video_id, user_id, title, predict_url]);

    return { message: 'Prediction added successfully' };
  } catch (error) {
    throw createCustomError(error.message, error.statusCode || 500);
  }
}

export async function getAllPredictions(user_id) {
  try {
    if (!user_id) {
      throw createCustomError('User ID is required', 400);
    }

    const querySelect = 'SELECT * FROM Predictions WHERE user_id = ?';
    const rows = await connection.query(querySelect, [user_id]);

    const baseUrl = 'http://localhost:3000/uploads/';
    const predictions = rows.map(row => ({
      ...row,
      predict_url: baseUrl + row.predict_url
    }));

    return predictions;
  } catch (error) {
    throw createCustomError(error.message, error.statusCode || 500);
  }
}

