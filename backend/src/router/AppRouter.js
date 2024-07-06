import { Router } from 'express';
import { userRouter } from './userRouter.js';
import { videoRouter } from './videoRouter.js';
import { predictRouter } from './predictRouter.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('this is an API for motion prediction application');
});
router.use('/user',userRouter)
router.use('/video',videoRouter)
router.use('/predict',predictRouter)

export { router as AppRouter };
