import express from 'express'
import { signin, signout, signup, test } from '../controllers/auth.controller.js'

const router = express.Router()

router.get('/test', test)
router.post('/signup', signup)
router.post('/signin', signin)
router.get('/signout', signout)


export default router