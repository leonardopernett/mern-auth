import jwt from "jsonwebtoken"


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


export const validarToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'secretkey12456', (err, decoded) => {
       if(err){
         reject(error)
       }

       resolve(decoded)
    })
 })
}