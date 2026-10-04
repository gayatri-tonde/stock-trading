import React from "react";
const charges = [
  {
    title: "Account Opening",
    amount: "₹0",
    description: "No charge for opening your Finora investment account.",
  },
  {
    title: "Equity Delivery",
    amount: "₹0",
    description:
      "Invest in stocks for the long term without brokerage charges.",
  },
  {
    title: "Intraday Trading",
    amount: "₹20",
    description: "₹20 or 0.03% per executed order, whichever is lower.",
  },
  {
    title: "Futures",
    amount: "₹20",
    description: "Simple flat pricing for futures trades.",
  },
  {
    title: "Options",
    amount: "₹20",
    description: "Flat ₹20 brokerage per executed options order.",
  },
  {
    title: "Mutual Funds & IPOs",
    amount: "₹0",
    description:
      "No brokerage charges for mutual fund investments and IPO applications.",
  },
];
export default function Charges() {
  return (
    <>
      <section className="py-5 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our charges</h2>

            <p className="text-secondary">
              Everything you need to know before placing an order.
            </p>
          </div>

          <div className="row g-4">
            {charges.map((charge, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 text-center">
                    <h3 className="fw-bold text-success">{charge.amount}</h3>
                    <h5 className="fw-bold">{charge.title}</h5>

                    <p className="text-secondary mb-0">{charge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
