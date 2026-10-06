import React from "react";

export default function Features() {
  return (
    <div className="container-fluid text-left px-5 py-2 bg-light">
      <div className="row mt-5 mx-5">
        <div className="col-lg-5">
          <ul className="col ">
            <h1 className="text-success fw-bold">Trust with confidence</h1>

            <li className="row mt-4">
              <h5>Secure & Private</h5>
              <p>
                Your data is handled with security in mind, keeping your
                personal information protected. Built with modern practices to
                provide a safe and reliable platform experience.
              </p>
            </li>

            <li className="row mt-3">
              <h5>Transparent Information</h5>
              <p>
                Access your dashboard, portfolio, and market information quickly
                and smoothly. Spend less time navigating and more time focusing
                on your investments.
              </p>
            </li>

            <li className="row mt-3">
              <h5>Built for Smart Investing</h5>
              <p>
                Powerful tools and intuitive features help simplify your
                investment journey. Track your portfolio, explore markets, and
                organize your watchlist effortlessly.
              </p>
            </li>

            <li className="row mt-3">
              <h5>Do better with money</h5>
              <p>
                We don't just facilitate transactions, but actively help you do
                better with your money.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  );
}
