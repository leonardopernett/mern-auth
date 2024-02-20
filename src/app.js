import express from 'express'
import morgan from 'morgan'
import path from 'path'
import useAuthRouter from './routes/auth.router.js'
import { mongoConnect } from  './bd.js'
import cookie from 'cookie-parser'

const app = express()

app.disable('x-powered-by')

mongoConnect();
 
app.use(morgan('dev'))
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api',useAuthRouter)

app.use(express.static(path.resolve('./public')))

export default app 