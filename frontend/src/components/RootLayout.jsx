import { Outlet } from 'react-router-dom'
import { NextUIProvider } from "@nextui-org/react";
import Navigation from './Navigation';

export default function RootLayout() {
  return (
  <NextUIProvider>
    <main>
       <Navigation />
       <Outlet />
    </main>
  </NextUIProvider>
  )
}
