import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing page/home/homePage";
import SignupPage from "./landing page/signup/signupPage";
import PricingPage from "./landing page/pricing/pricingPage";
import SupportPage from "./landing page/support/supportPage";
import AboutPage from "./landing page/about/aboutPage";
import Navbar from "./landing page/common/Navbar";
import Footer from "./landing page/common/footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
