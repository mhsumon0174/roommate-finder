import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddtoFind from "../pages/AddtoFind";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";

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
        path: "/*",
        element: <h1>Error Page</h1>,
      },
    ],
  },
]);
export default router;
