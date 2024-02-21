import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})


http.interceptors.request.use((config)=>{

   return config

},(err) =>{
     Promise.reject(err)
  } 
)

export default http
