import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input, Card, CardBody, Button } from "@nextui-org/react";
import { format } from '@formkit/tempo'


export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
              <Button color='primary'>
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
