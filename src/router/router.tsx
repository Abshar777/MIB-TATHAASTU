import { createBrowserRouter } from "react-router-dom";
import App from "../page/App";
import About from "../page/About";
import ErrorPage from "../page/notFound";
import Layout from "../components/layout";
import ContactUs from "../page/ContactUs";
import Services from "../page/services";
import Appoinment from "../page/appoinment";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/appoinment",
        element: <Appoinment />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
