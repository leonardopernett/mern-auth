import { Outlet, redirect } from 'react-router-dom'

import Cookies from 'universal-cookie'

const cookie = new Cookies(null)


export default function Dasboard() {

 if(cookie.get('token') === 'undefined'){
  console.log('entro')
  return  redirect('/login')
 }

  return (
    <div>
      <Outlet />
    </div>
  )
}
