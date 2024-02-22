import { createContext, useContext, useState } from 'react'
import { loginRequest, registerRequest } from '../services/auth.service'
import Cookie from 'js-cookie'
import { useAuthStore } from '../store/useAuthStore'

const Context = createContext(null)

export const useAuth = () => {
   
   const context = useContext(Context)

   if(!context){
     throw new Error('useAuth must be used within  an Provider')
   }
   return context
}

export const ContextProvider = ({children}) => {

   const [user, setuser] = useState(null)
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [error, setError] = useState(null)

   const { setAuth } = useAuthStore()


  const login = async (data) => {
    try {
      const response =  await loginRequest(data)
      
      if(response.statusCode === 200) {
        setuser(response.user)
        setError(null)
        setAuth(response.user)
        setIsAuthenticated(true)
      }else{
        setError(response.message)
        setIsAuthenticated(false)
      }
      
    } catch (error) {
      setIsAuthenticated(false)
      setError(error.response.data)

    }
  }

  const register = async(data) => {
    return await registerRequest(data)
  }

  const logout = () => {
     setIsAuthenticated(false)
     setuser(false)
     setError(null)
     setAuth(null)
     localStorage.removeItem('user')
     Cookie.remove('token')
  }


  return (
        <Context.Provider value={{ 
            register,
            login,
            user,
            error,
            isAuthenticated,
            logout
        }}>
            {children}
        </Context.Provider>
  )
}