import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Card, CardBody, Button } from "@nextui-org/react";
import { useAuth } from '../context/useAuthContext';
import { useCallback, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast'

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { login, isAuthenticated, error } = useAuth()

  useEffect(() => {
    if(isAuthenticated) {
      return navigate('/tasks')
    }
  },[isAuthenticated])


  useEffect(() => {
    if(error) {
      toast.error(error.message)
    }
  },[error])


  const onSubmit = async (data) => {
    await login(data)

  }


  
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="mx-auto w-6/12 shadow-md mt-10 p-5 border-gray-800">
        <h2 className="text-center font-bold text-2xl">Login</h2>
        <CardBody>
          <form
            className="w-7/12 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-2">
              <Input
                className="w-full"
                type="text"
                name="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
              <small className="text-red-600 font-bold">
                {errors.email?.type === 'required' && 'Email is required'}
              </small>
            </div>

            <div className="mb-2">
              <Input
                className="w-full"
                type="password"
                placeholder="Password"
                name="password"
                {...register('password', { required: true })}
              />
              <small className="text-red-600 font-bold">
                {errors.password?.type === 'required' && 'Password is required'}
              </small>
            </div>

            <div className="grid">
              <Button color='primary' type='submit'>
                Login
              </Button>
            </div>
            <p>
              You don't have an account? <Link to="/register">Signup</Link>
            </p>
           
          </form>
        </CardBody>


      </Card>
    </section>
  )
}
