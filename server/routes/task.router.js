import { Router } from 'express'
import { getTask, getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js'
import { verifyToken } from '../middleware/jwt.js'

const router = Router()

router.get('/tasks', verifyToken, getTasks)
router.get('/tasks/:id',verifyToken, getTask)
router.post('/tasks', verifyToken,createTask)
router.put('/tasks/:id',verifyToken, updateTask)
router.delete('/tasks/:id',verifyToken, deleteTask)

export default router 