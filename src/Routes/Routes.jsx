import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllEvents from "../Pages/AllEvents/AllEvents";
import Career from "../Pages/Career/Career";
import Service from "../Components/Services/Service";
import PrivateRoute from "../Providers/PrivateRoute";
import ServiceDetails from "../Components/Services/ServiceDetails";
import PrivateLoginRegisterRoute from "../Providers/PrivateLoginRegisterRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/allevents",
        element: (
          <PrivateRoute>
            <AllEvents></AllEvents>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career></Career>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateLoginRegisterRoute>
            <Login></Login>
          </PrivateLoginRegisterRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateLoginRegisterRoute>
            <Register></Register>
          </PrivateLoginRegisterRoute>
        ),
      },
    ],
  },
]);

export default myRoutes;
