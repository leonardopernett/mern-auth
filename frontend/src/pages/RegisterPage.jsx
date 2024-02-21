import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input, Card, CardBody, Button } from "@nextui-org/react";

export default function RegisterPage() {
 
  const { register, handleSubmit, formState:{ errors } } = useForm()
 
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="flex justify-center items-center h-screen">
     <Card className="mx-auto w-5/12 shadow-md mt-10 border-gray-800">
        <h2 className="text-center font-bold text-2xl my-2">Register</h2>
        <CardBody>
          <form
            className="w-7/12 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >

             <div className="mb-2">
              <Input
                className="w-full"
                type="text"
                name="username"
                placeholder="Username"
                {...register('username', { required: true })}
              />
              <small className="text-red-600 font-bold">
                {errors.username?.type === 'required' && 'Username is required'}
              </small>
            </div>

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
              <Button color='primary'>
                Login
              </Button>
            </div>
            <p className="py-2">
              You  have an account? <Link to="/login">Signup</Link>
            </p>
          </form>
        </CardBody>


      </Card>
    </section>
  )
}
