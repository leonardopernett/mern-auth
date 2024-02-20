import { Router } from 'express'
import { login, register, profile, logout } from '../controllers/authController.js'
import { verifyToken } from '../middleware/jwt.js'
import { ValidateSchema } from '../middleware/validate-schema.js'
import { loginUserSchema, registerUserSchema } from '../middleware/validate.js'

const router = Router()

router.post('/login',ValidateSchema(loginUserSchema),login)
router.post('/register',ValidateSchema(registerUserSchema),register)
router.get('/profile',verifyToken,profile)
router.get('/logout',logout)


export default router 