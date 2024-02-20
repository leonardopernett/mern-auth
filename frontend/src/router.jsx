import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RootLayout from "./components/RootLayout";
import Error404 from "./pages/Error404";

export const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      },

      {
        path: "/register",
        element: <RegisterPage />
      },
    ]
  },
])