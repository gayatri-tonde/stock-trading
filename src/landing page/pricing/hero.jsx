import React from "react";

export default function Hero() {
  return (
    <>
      <section className="py-5 ">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 pt-5">
                Invest more.
                <span className="text-success"> Pay less.</span>
              </h1>

              <p className="lead text-secondary py-2 mb-4">
                Simple, transparent pricing with no unnecessary complexity. Know
                your costs before you invest or trade with Finora.
              </p>

              <div className="row g-3 mt-4 py-5">
                <div className="col-md-4">
                  <div className="bg-white rounded-4 shadow-sm h-200 p-5">
                    <h1 className="fw-bold text-success mb-1">₹0</h1>
                    <p className="text-secondary mb-0">Equity Delivery</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-white rounded-4 shadow-sm h-200 p-5">
                    <h1 className="fw-bold text-success mb-1">₹20</h1>
                    <p className="text-secondary mb-0">Intraday & F&O</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-white rounded-4 shadow-sm h-200 p-5">
                    <h1 className="fw-bold text-success mb-1">₹0</h1>
                    <p className="text-secondary mb-0">Mutual Funds & IPOs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
