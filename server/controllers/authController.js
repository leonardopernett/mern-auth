
import { ZodError } from 'zod'
import { comparePassword, encryptPassword } from '../middleware/bcrypt.js'
import { generarToken } from '../middleware/jwt.js'
import { loginUserSchema } from '../middleware/validate.js'

import User from '../models/User.js'

export const register  = async (req,res) => {
   try {
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
      res.status(400).json(error)
   }
} 

export const login  = async (req,res) => {
 try {
   const response = loginUserSchema.parse(req.body)
   
   const user = await User.findOne({ email:response.email })

   if(!user){
     return res.status(400).json({
         message: 'User or password incorrect',
         statusCode:400
      })
   }

   const match = await comparePassword(response.password, user.password)

   if(!match){
      return res.status(400).json({
         message: 'User or password incorrect',
         statusCode:400
      })
   }

   const token = await generarToken(user)
   res.cookie('token', token)

   return res.status(200).json({
      message: 'User logged in successfully',
      statusCode:200,
      user
   })

 } catch (error) {
   return res.status(400).json(error)
 }
}

export const logout = async (req, res) => {
   res.cookie('token', '')
   res.json({
      message: 'User logged out successfully',
   })
 }

export const profile = async (req, res) => {
  const user = await User.findById(req.user.id)

  const newUser = {
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
  res.json(newUser)
}

export const getUser = async (req, res) => {
  try {
     const { page, limit } = req.query
     if(page){
        const users = await User.paginate({},{ page, limit })
        res.json(users)
     }else{
        const users = await User.paginate({},{page:1, limit:5})
        res.json(users)
     }

  } catch (error) {
    res.json({
      message: 'error' + error
    })
  }
}

