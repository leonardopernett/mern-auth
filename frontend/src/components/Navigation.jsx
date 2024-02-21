import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu, 
  NavbarItem,
  NavbarMenuItem
} 
from "@nextui-org/react";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
 
  const [isMenuOpen, setIsMenuOpen] =useState(false);


  const router = [
    {
      path:'/login',
      label:'Login'
    },

    {
      path:'/register',
      label:'Register'
    },
  ];



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
             MERN
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {
          router.map((item, index) => (
            <NavbarItem className="hidden sm:flex" key={index}>
              <NavLink 
                className={({ isActive }) => isActive ? 'font-bold' : '' }
                to={item.path}>
                { item.label }
              </NavLink>
            </NavbarItem>     
          ))
        }
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col">
          {
            router.map((item,index) => (
              <NavLink 
                className={({ isActive })=> isActive ? 'font-bold' : '' }
                to={item.path} 
                key={index}
              >
                {item.label}
              </NavLink>      
            ))
          }
        </NavbarMenuItem>
      </NavbarMenu>

    </Navbar>
  )
}
