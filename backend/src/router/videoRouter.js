import { Router } from "express";
import { tryCatchWrapper } from "../middelwares/controllerWrapper.js";
import { uploadVideo ,getAllVideos,getVideoById} from "../controller/videoController.js";
import upload from "../config/upload.js";
const router = Router()
router.get('/all', tryCatchWrapper(getAllVideos));
router.get('/:id', tryCatchWrapper(getVideoById))
router.post('/upload', upload.single('video'), tryCatchWrapper(uploadVideo));
export {router as videoRouter}