import express from 'express'
import morgan from 'morgan'
import path from 'path'
import useAuthRouter from './routes/auth.router.js'
import useTaskRouter from './routes/task.router.js'
import cors from 'cors'
import { mongoConnect } from  './bd.js'
import cookie from 'cookie-parser'

const app = express()

app.disable('x-powered-by')

//mongoDB 
mongoConnect();
 
//middleware
app.use(morgan('dev'))
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

//router
app.use('/api',useAuthRouter)
app.use('/api',useTaskRouter)


//static file
app.use(express.static(path.resolve('./public')))

export default app 