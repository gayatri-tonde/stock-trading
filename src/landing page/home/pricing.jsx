import React from "react";

export default function Pricing() {
  return (
    <div className="container-fluid mx-5 p-5">
      <div className="row p-5">
        <div className="col-lg-5">
          <h4 className="mb-3"> Unbeatable pricing </h4>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none", fontWeight: "bold" }} href="/">
            See Pricing
          </a>
          <i class="fa-solid fa-arrow-right" style={{ color: "blue" }}></i>
        </div>

        <div className="col-lg-7">
          <img src="images/pricing.png" width="90%" />
        </div>
      </div>
    </div>
  );
}
