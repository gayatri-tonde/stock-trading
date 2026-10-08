import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light-subtle border-bottom px-5 sticky-top">
        <div class="container-fluid mx-5 px-5">
          <Link class="navbar-brand col-8 fw-bold " to="/">
            <img src="images/Finora Green Fintech Logo.png" width="20%" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse col-4" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-evenly w-100">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
