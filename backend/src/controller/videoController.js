import { addVideo,fetchAllVideos,fetchVideoById } from '../services/videoServices.js';
import { createCustomError } from '../error/Customerror.js';

export async function uploadVideo(req, res, next) {
  const { user_id, title } = req.body;
  const video_url = req.file.path; 

  try {
    if (!req.file) {
      throw createCustomError('Video file is required', 400);
    }

    const result = await addVideo(user_id, title, video_url);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getAllVideos(req, res, next) {
    try {
      const videos = await fetchAllVideos();
      res.status(200).json(videos);
    } catch (error) {
      next(error);
    }
  }

  export async function getVideoById(req, res, next) {
    const { id } = req.params;
  
    try {
      const video = await fetchVideoById(id);
      if (!video) {
        throw createCustomError(`Video with ID ${id} not found`, 404);
      }
      res.status(200).json(video);
    } catch (error) {
      next(error);
    }
  }

  