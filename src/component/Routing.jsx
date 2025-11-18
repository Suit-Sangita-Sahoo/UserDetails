import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login/Login";
import Signup from "./Register/Signup";
import Profile from "./Profile/Profile";
import UploadCV from "./UploadCV/UploadCV";
import Home from "./Home";

export const paths = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },         // ✅ Home shows first
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
      { path: "upload", element: <UploadCV /> }
    ]
  },
]);

const Routing = () => {
  return <RouterProvider router={paths} />;
};

export default Routing;
