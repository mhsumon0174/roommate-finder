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
import Loading from "../components/Loading";
import PrivateRoute from "../contexts/PrivateRoute";
import UpdatePost from "../components/UpdatePost";

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
        element: (
          <PrivateRoute>
            <AddtoFind></AddtoFind>
          </PrivateRoute>
        ),
      },
      {
        path: "/browseListing",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://assignment-10-server-theta-three.vercel.app/roommates"),

        Component: BrowseListing,
      },
      {
        path: "mylisting/:email",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-theta-three.vercel.app/mylisting/${params.email}`),

        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
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
        path: "roommatedetails/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-theta-three.vercel.app/roommates/${params.id}`),
        element: (
          <PrivateRoute>
            <RoommatesDetails></RoommatesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "roommateedit/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-theta-three.vercel.app/roommates/${params.id}`),
        Component: UpdatePost,
      },

      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
export default router;
