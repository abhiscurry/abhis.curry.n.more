import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar.tsx";
import Banner from "./components/Banner.tsx";
import Footer from "./components/Footer.tsx";
import "react-datepicker/dist/react-datepicker.css";
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      {/* <OfferBanner
        message="20% OFF all order this weekend. Use code WALL20 "
        pillText="Grand Opening"
      /> */}
      <Banner position="top" />
      <Navbar />
      <Banner position="bottom" />
      <App />
      <Footer></Footer>
    </Router>
  </React.StrictMode>
);
