import express from 'express';
import { getUsers,updateUser }from "../controllers/user.js";
import { verifyToken } from '../verifytoken.js';
const router = express.Router();
router.get("/find/:id", getUsers);
router.put('/id',verifyToken,updateUser)
export default router;