import connection from "../config/server.js";
import { createCustomError } from "../error/Customerror.js";
import { promisify } from "util";

const query = promisify(connection.query).bind(connection);

export async function addPredict(video_id, user_id, title, predict_url) {
  try {
    if (!video_id || !user_id || !title || !predict_url) {
      throw createCustomError('All fields are required', 400);
    }

    const queryInsert = 'INSERT INTO Predictions (video_id, user_id, title, predict_url) VALUES (?, ?, ?, ?)';
    await query(queryInsert, [video_id, user_id, title, predict_url]);

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
    const rows = await query(querySelect, [user_id]);

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

export async function getPredictionById(predict_id) {
  try {
    if (!predict_id) {
      throw createCustomError('Prediction ID is required', 400);
    }

    const querySelect = 'SELECT * FROM Predictions WHERE predict_id = ?';
    const [rows] = await query(querySelect, [predict_id]);

    if (rows.length === 0) {
      throw createCustomError('Prediction not found', 404);
    }

    const baseUrl = 'http://localhost:3001/uploads/';
    const prediction = {
      ...rows[0],
      predict_url: baseUrl + rows[0].predict_url
    };

    return prediction;
  } catch (error) {
    throw createCustomError(error.message, error.statusCode || 500);
  }
}
