import { Outlet } from 'react-router-dom'
import { NextUIProvider } from "@nextui-org/react";
import Navigation from './Navigation';
import { ContextProvider } from '../context/useAuthContext';
import  { Toaster } from 'react-hot-toast';

export default function RootLayout() {
  return (
  <>
    <NextUIProvider>
      <ContextProvider>
        <Navigation />
        <Outlet />
      </ContextProvider>
    </NextUIProvider>
    <Toaster />
  </>
  )
}
