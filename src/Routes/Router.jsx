import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddtoFind from "../pages/AddtoFind";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Error from "../pages/Error";
import RoommatesDetails from "../components/RoommatesDetails";

const router = createBrowserRouter([
  {
    path: "/",

    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addtofind",
        Component: AddtoFind,
      },
      {
        path: "/browseListing",
        Component: BrowseListing,
      },
      {
        path: "/mylisting",
        Component: MyListing,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
     
      {
        path:'roommatedetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/roommates/${params.id}`),
        Component:RoommatesDetails
      },
      {
        path: "/*",
       Component:Error,
      },
    ],
  },
]);
export default router;
