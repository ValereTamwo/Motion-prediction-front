import { addPredict, getAllPredictions } from '../services/predictionsServices.js';
import { createCustomError } from '../error/Customerror.js';

export async function uploadPrediction(req, res, next) {
    console.log('djwidjiejidjie')
  const { video_id, user_id, title } = req.body;
  const predict_url = req.file.path;

  try {
    if (!req.file) {
      throw createCustomError('Prediction file is required', 400);
    }

    const result = await addPredict(video_id, user_id, title, predict_url);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getAllPrediction(req, res, next) {
  const { id } = req.params;
  try {
    const predictions = await getAllPredictions(id);
    res.status(200).json(predictions);
  } catch (error) {
    next(error);
  }
}



