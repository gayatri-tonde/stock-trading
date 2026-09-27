import React from "react";
import Hero from "./hero";
import Investment from "./investment";
import FAQ from "./FAQ";
import Navbar from "../common/Navbar";
import Procedure from "./procedure";
import Benefits from "./benefits";
import Footer from "../common/footer.jsx";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Investment />
      <Procedure />
      <Benefits />
      <FAQ />
      <Footer />
    </>
  );
}
