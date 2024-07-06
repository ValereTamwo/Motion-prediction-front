import { Router } from 'express';
import { userRouter } from './userRouter.js';
import { videoRouter } from './videoRouter.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('this is an API for motion prediction application');
});
router.use('/user',userRouter)
router.use('/video',videoRouter)

export { router as AppRouter };
