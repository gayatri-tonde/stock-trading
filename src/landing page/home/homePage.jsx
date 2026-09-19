import React from "react";
import Navbar from "../../common/Navbar";
import Education from "./education";
import Hero from "./Hero";
import Signup from "../../common/signup";
import Features from "./features";
import Pricing from "./pricing";
import Footer from "../../common/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Signup />
      <Features />
      <Pricing />
      <Education />
      <Signup />
      <Footer />
    </>
  );
}
