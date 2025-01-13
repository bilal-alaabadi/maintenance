import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Prodect from "../main/Prodect";
import Kdmh from "../main/kdmh";
import Storey from "../main/Storey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/prodect",element:<Prodect/>},
        {path:"/kdmh",element:<Kdmh/>},
        {path:"/storey",element:<Storey/>},
    ]
  },
]);

export default router;