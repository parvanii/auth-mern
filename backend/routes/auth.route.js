import express from 'express';
const router= express.Router();
import {signup,login,logout,verifyEmail,forgotPassword,resetPassword ,checkAuth} from '../controllers/auth.controller.js'
import { verifyToken } from '../middleware/verifyToken.js';
router.get("/check-auth", verifyToken, checkAuth);

router.post('/signup',signup)

router.post('/login',login)

router.post('/logout',logout)

router.post('/verify-email',verifyEmail)

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword); //: before token as it's dynamic

export default router;