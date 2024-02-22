import http from './axios.config'


export const loginRequest = async (user) => {

   const response = await http.post('/login',user)
   return response.data
  
}

export const registerRequest = async (user) => {
   const response = await http.post('/register',user)
   return response.data
}