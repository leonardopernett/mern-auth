import { ZodError } from 'zod'

export const ValidateSchema = (schema) => (req, res, next) => {
   try {
     schema.parse(req.body)
     next()
   } catch (error) {
      if(error instanceof ZodError){
        res.json(error.issues.map(issue => issue)) 
      }
   }
}