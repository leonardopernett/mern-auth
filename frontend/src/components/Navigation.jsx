import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,

}
  from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, redirect, useNavigation } from 'react-router-dom'
import { useAuth } from "../context/useAuthContext";
import { useAuthStore } from "../store/useAuthStore";

export default function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth()
  const navigate = useNavigation()
  const { user } = useAuthStore()

  const router = [
    {
      path: '/login',
      label: 'Login'
    },

    {
      path: '/register',
      label: 'Register'
    }
  ];

  useEffect(() => {
 
  }, [])

  const logoutSesion = () => {
    logout()
    return redirect('/login')
  }


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

      {
        user ? (
          <>
            <NavbarContent justify="end">
              <NavbarItem>
                {user.email}
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                 <button onClick={logoutSesion}>
                  logout
                 </button>
              </NavbarItem>
            </NavbarContent>
          </>
        ) : (
          <NavbarContent justify="end">
            {
              router.map((item, index) => (
                <NavbarItem className="hidden sm:flex" key={index}>
                  <NavLink
                    className={({ isActive }) => isActive ? 'font-bold' : ''}
                    to={item.path}>
                    {item.label}
                  </NavLink>
                </NavbarItem>
              ))
            }
          </NavbarContent>
        )
      }



      <NavbarMenu>
        {
          user ? (
            <NavbarMenuItem className="flex flex-col">
              <NavLink>
                {user.email}
              </NavLink>
            </NavbarMenuItem>

          ) : (
            <NavbarMenuItem className="flex flex-col">
              {
                router.map((item, index) => (
                  <NavLink
                    className={({ isActive }) => isActive ? 'font-bold' : ''}
                    to={item.path}
                    key={index}
                  >
                    {item.label}
                  </NavLink>
                ))
              }
            </NavbarMenuItem>
          )
        }
      </NavbarMenu>

    </Navbar>
  )
}
