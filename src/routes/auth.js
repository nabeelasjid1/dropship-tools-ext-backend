import express from 'express';
import passport from 'passport';
import {
  SignIn,
  SignUp,
  ForgetPassword,
  ForgetCodeVerify,
  ResetPassword
} from '../controllers/auth';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();

const loginCheck = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      req.error = info.error;
    } else req.user = user;
    next()
  })(req, res, next);
}

router.post('/sign-in', loginCheck, SignIn);
router.post('/sign-up', SignUp);
router.post('/forget-password', ForgetPassword);
router.post('/reset-password', ForgetCodeVerify);
router.put('/change-password', authenticateAuthToken, ResetPassword);
export default router;
