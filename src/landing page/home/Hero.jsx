import React from "react";
import OpenAccount from "../common/openAccount";

export default function Hero() {
  return (
    <div className="container-fluid text-center my-5 py-3">
      <img
        src="images/FINORA Trading Dashboard Devices.png"
        alt="Hero Image"
        width="50%"
        height="auto"
      ></img>
      <OpenAccount />
    </div>
  );
}
