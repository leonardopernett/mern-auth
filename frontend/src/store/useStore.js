import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useStore = create((set) => ({
  token: null,
  generarToken: (token) => set( (state) => ({
    token
  }))
}))