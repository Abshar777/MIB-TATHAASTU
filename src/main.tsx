import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./page/App.tsx";
import "../public/css/bootstrap.min.css";
import "../public/css/slicknav.min.css";
import "../public/css/swiper-bundle.min.css";
import "../public/css/all.min.css";
import "../public/css/animate.css";
import "../public/css/magnific-popup.css";
import "../public/css/mousecursor.css";
import "../public/css/custom.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
