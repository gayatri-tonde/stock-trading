import React from "react";
import Navbar from "../common/Navbar";
import Education from "./education";
import Hero from "./Hero";
import Features from "./features";
import Pricing from "./pricing";
import Footer from "../common/footer";
import OpenAccount from "../common/openAccount";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenAccount />
      <Features />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}
