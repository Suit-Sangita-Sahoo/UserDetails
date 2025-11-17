import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login/Login";
import Signup from "./Register/Signup";
import Profile from "./Profile/Profile";
import UploadCV from "./UploadCV/UploadCV";

export const paths = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {path:"/profile",element:<Profile/>},
      {path:"/upload",element:<UploadCV/>}
    ]
  },
]);

const Routing = () => {
  return <RouterProvider router={paths} />;
};

export default Routing;
