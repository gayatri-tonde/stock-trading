import React from "react";
import OpenAccount from "../common/openAccount";

export default function Hero() {
  return (
    <div>
      <div className="container-fluid text-center mt-5 py-3">
        <img
          src="images/FINORA Trading Dashboard Devices.png"
          alt="Hero Image"
          width="50%"
          height="auto"
        ></img>
      </div>
      <OpenAccount />
    </div>
  );
}
