import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const generarToken = async (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id:user._id }, 'secretkey12456',{expiresIn:'1h'}, (err, token)=>{
      if(err){
        reject(err)
       }
  
       resolve(token)
    })   
  })
}


export const verifyToken = async  (req,res, next) => {
    
  const { token } = req.cookies
  if(!token) return res.status(401).json({ msg: 'No autorizado' }
  )
  const payload = jwt.verify(token, 'secretkey12456')

  try {
    if(!payload) return res.status(401).json({ msg:'No autorizado' })
    req.user = payload
    next()
  } catch (error) {
     res.status(401).json({ msg: 'No autorizado' })
  }
}