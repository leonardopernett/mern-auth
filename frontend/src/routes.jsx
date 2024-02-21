import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './components/RootLayout'
import Error404 from './pages/Error404'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dasboard from './components/Dasboard'
import TaskDetailPage from './pages/TaskDetailPage'
import TaskListPage from './pages/TaskListPage'
import TaskFormPage from './pages/TaskFormPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage /> 
      },
      {
        path:'/tasks',
        element: <Dasboard />,
        children:[
          {
            path: '',
            element: <TaskListPage />,
          },
          {
            path: 'create',
            element: <TaskFormPage />,
          },
          {
            path: 'details/:id',
            element: <TaskDetailPage />,
          },
          
        ]
      }
    ]
  },
  
],{
  future:{
    v7_partialHydration: true,
  }
})