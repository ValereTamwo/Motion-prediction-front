import connection from "../config/server.js";
import { createCustomError } from "../error/Customerror.js";

export async function addVideo(user_id, title, video_url) {
  try {
    if (!user_id || !title || !video_url) {
      throw createCustomError('All fields are required', 400);
    }
    const queryInsert = 'INSERT INTO Videos (user_id, title, video_url) VALUES (?, ?, ?)';
    await connection.query(queryInsert, [user_id, title, video_url]);
    
    return { message: 'Video added successfully' };
  } catch (error) {
    throw createCustomError(error.message, error.statusCode || 500);
  }
}


export async function fetchAllVideos() {
    try {
      const querySelect = 'SELECT * FROM Videos';
      const [rows] = await connection.query(querySelect);
      
      const baseUrl = 'http://localhost:3000/uploads/';
      const videos = rows.map(row => ({
        ...row,
        video_url: baseUrl + row.video_url
      }));
      
      return videos;
    } catch (error) {
      throw createCustomError(error.message, error.statusCode || 500);
    } 
  }

  export async function fetchVideoById(video_id) {
    try {
      const querySelect = 'SELECT * FROM Videos WHERE video_id = ?';
      const [rows] = await connection.query(querySelect, [video_id]);
  
      if (rows.length === 0) {
        return null;
      }
  
      const baseUrl = 'http://localhost:3000/uploads/';
      const video = {
        ...rows[0],
        video_url: baseUrl + rows[0].video_url
      };
  
      return video;
    } catch (error) {
      throw createCustomError(error.message, error.statusCode || 500);
    } 
  }
