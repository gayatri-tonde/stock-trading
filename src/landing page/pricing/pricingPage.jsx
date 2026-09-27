import React from "react";
import Hero from "./hero";
import InfoTable from "./infoTable";
import Charges from "./charges";
import DematAMC from "./DematAMC";
import ChargesExplain from "./ChargesExplain";
import Navbar from "../common/Navbar";
import Footer from "../common/footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoTable />
      <Charges />
      <DematAMC />
      <ChargesExplain />
      <Footer />
    </>
  );
}
