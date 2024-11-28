import User from "./features/user/User";
import Role from "./features/role/Role";
import Permission from "./features/permission/Permission";
import Error from "./features/ui/Error";
import Applayout from "./features/ui/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <User />,
      },

      {
        path: "/role",
        element: <Role />,
      },
      {
        path: "/permission",
        element: <Permission />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
