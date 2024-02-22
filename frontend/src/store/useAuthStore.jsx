import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user:null,
      setAuth:(user) => 
        set(state => ({
          user
        })),
      
      
}),{
     name:'user'
   }
))


