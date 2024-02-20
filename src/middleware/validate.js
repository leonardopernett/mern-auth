
import { z } from 'zod'

export const registerUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
}) 

export const loginUserSchema = z.object({
 email: z.string().email(),
 password: z.string().min(6),
}) 

export const createTaskSchema = z.object({
   title: z.string().min(3),
   description: z.string().min(3) 
})
