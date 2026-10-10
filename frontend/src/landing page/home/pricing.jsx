import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="container-fluid mx-5 p-5">
      <div className="row p-5">
        <div className="col-lg-5">
          <h2 className="mb-3 text-success fw-bold"> Unbeatable pricing </h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link
            style={{ textDecoration: "none", fontWeight: "bold" }}
            to="/pricing"
          >
            See Pricing
            <i class="fa-solid fa-arrow-right" style={{ color: "blue" }}></i>
          </Link>
        </div>

        <div className="col-lg-7">
          <div className="row text-center">
            <div className="col shadow-sm p-4 mx-4">
              <h1 className="fw-bold text-success mb-1">₹0</h1>
              <p className="text-secondary mb-0">Equity Delivery</p>
            </div>
            <div className="col p-4 shadow-sm">
              <h1 className="fw-bold text-success mb-1">₹20</h1>
              <p className="text-secondary mb-0">Intraday & F&O</p>
            </div>

            <div className="col p-4 shadow-sm mx-4">
              <h1 className="fw-bold text-success mb-1">₹0</h1>
              <p className="text-secondary mb-0">Mutual Funds & IPOs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
