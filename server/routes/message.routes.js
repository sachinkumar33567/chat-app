import express from "express";
import { getMesssages, sendMessage } from "../controllers/message.controller.js";
import verifyToken from "../middleware/verify.token.js";

const router = express.Router()

router.post('/send/:id', verifyToken, sendMessage)
router.get('/:id', verifyToken, getMesssages)

export default router