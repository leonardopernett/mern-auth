import { Router } from 'express'
import { login, register, getUser, profile, logout } from '../controllers/authController.js'
import { verifyToken } from '../middleware/jwt.js'

const router = Router()

router.get('/users',verifyToken,getUser)
router.post('/login',login)
router.post('/register',register)
router.get('/profile',verifyToken,profile)
router.get('/logout',logout)


export default router 