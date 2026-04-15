import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Timeline from "../Timeline/Timeline";
import Status from "../Status/Status";
import Details from "../Carddetails/Details";
import Notfound from "../notFound/Notfound";
const Route = createBrowserRouter([
    {
    path:"/",
    element:<Layout></Layout>,
        children:[
            {index:true,element:<Home></Home>},
            {path:"/timeline",element:<Timeline></Timeline>},
            {path:"/status",element:<Status></Status>},
            {path:"/details/:id",element:<Details></Details>},
            {path:"*",element:<Notfound></Notfound>}
        ]
}

])
export default Route