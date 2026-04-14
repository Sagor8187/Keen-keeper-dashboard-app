import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Timeline from "../Timeline/Timeline";
import Status from "../Status/Status";
import Details from "../Carddetails/Details";
const Route = createBrowserRouter([
    {
    path:"/",
    element:<Layout></Layout>,
        children:[
            {index:true,element:<Home></Home>},
            {path:"/timeline",element:<Timeline></Timeline>},
            {path:"/status",element:<Status></Status>},
            {path:"/details/:id",element:<Details></Details>}
        ]
}

])
export default Route