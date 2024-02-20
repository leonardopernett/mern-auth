
import { ZodError, z } from 'zod'
import { comparePassword, encryptPassword } from '../middleware/bcrypt.js'

import User from '../models/User.js'
import { generarToken } from '../middleware/jwt.js'

const registerUserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
 }) 

 const loginUserSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6),
}) 

export const register  = async (req,res) => {
   try {
    const response = await registerUserSchema.parse(req.body)
    const newUser  = await User.findOne({ email:response.email }) 

    if(newUser){
     res.status(400).json({
        message: 'Email already exists',
        statusCode:400
     })
     return
    }

    const user = new User({
      username:response.username,
      email:response.email,
      password: await encryptPassword(response.password)
    })

   await user.save()
   const { password, ...data} = user
   const token = await generarToken(user)
   res.cookie('token', token)
   res.json({
      message: 'User created successfully',
   })

   } catch (error) {
      if(error instanceof ZodError){
        res.status(400).json(error.issues.map((item) => {
          return {
           message: item.message,
           path: item.path[0],
           code: item.code,
          }
       }))
      }
    
   }
} 

export const login  = async (req,res) => {
 try {
   const response = loginUserSchema.parse(req.body)
   
   const user = await User.findOne({ email:response.email })

   if(!user){
      res.status(400).json({
         message: 'User or password incorrect',
         statusCode:400
      })
   }

   const match = await comparePassword(response.password, user.password)

   if(!match){
      res.status(400).json({
         message: 'User or password incorrect',
         statusCode:400
      })
   }

   const token = await generarToken(user)
   
   res.cookie('token', token)

   res.json({
      message: 'User logged in successfully',
   })

 } catch (error) {
    if(error instanceof ZodError){
     res.status(400).json(error.issues.map((item) => {
       return {
        message: item.message,
        path: item.path[0],
        code: item.code,
       }
    }))
   }
 }
}