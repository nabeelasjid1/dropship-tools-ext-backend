import express from 'express';
import auth from './auth';
import user from './users';
import scraping from './scraping';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();
router.use('/auth', auth);
router.use('/users', authenticateAuthToken, user);
router.use('/scraping', authenticateAuthToken, scraping);

export default router;
