import { Router } from "express";
import { tryCatchWrapper } from "../middelwares/controllerWrapper.js";
import upload from "../config/upload.js";
import { getAllPrediction, getPredictionByid, uploadPrediction } from "../controller/predicController.js";
const router = Router();

router.get('/all/:id', tryCatchWrapper(getAllPrediction));
router.get('/:id', tryCatchWrapper(getPredictionByid));
router.post('/upload', upload.single('video'), tryCatchWrapper(uploadPrediction));

export { router as predictRouter };
