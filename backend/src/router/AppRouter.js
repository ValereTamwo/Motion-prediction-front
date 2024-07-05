import { Router } from 'express';
import { userRouter } from './userRouter.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('this is an API for motion prediction application');
});
router.use('/user',userRouter)

export { router as AppRouter };
