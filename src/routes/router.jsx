import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Storey from "../main/Storey";

import Login from "../components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/story",element:<Storey/>},
    ]
  },
  {path:"/login",element:<Login />}
]);

export default router;