
import { z } from 'zod'

export const registerUserSchema = z.object({
  username: z.string({
    required_error:'username is required'
  }).min(3),
  email: z.string({
    required_error:'email is required'
  }).email(),
  password: z.string({
    required_error: 'password is required'
  }).min(6,{
    message:'password must be at least 6 characters long'
  }),
}) 

export const loginUserSchema = z.object({
 email: z.string({
  required_error:'username is required'
 }).email(),
 password: z.string().min(6,{
  message: 'password must be at least 4 characters long'
 }),
}) 

export const createTaskSchema = z.object({
   title: z.string().min(3),
   description: z.string().min(3) 
})
