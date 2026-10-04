import React from "react";
const pricing = [
  {
    product: "Equity Delivery",
    brokerage: "₹0",
    details: "No brokerage on delivery trades",
  },
  {
    product: "Intraday",
    brokerage: "₹20",
    details: "₹20 or 0.03% per executed order, whichever is lower",
  },
  {
    product: "Futures",
    brokerage: "₹20",
    details: "₹20 or 0.03% per executed order, whichever is lower",
  },
  {
    product: "Options",
    brokerage: "₹20",
    details: "Flat ₹20 per executed order",
  },
  {
    product: "Mutual Funds",
    brokerage: "₹0",
    details: "No brokerage on direct mutual fund investments",
  },
  {
    product: "IPO",
    brokerage: "₹0",
    details: "No brokerage for IPO applications",
  },
];

export default function InfoTable() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container ">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Pricing that stays simple</h2>

            <p className="text-secondary">
              Clear brokerage charges across different investment products.
            </p>
          </div>

          <div className="table-responsive shadow-sm rounded-4">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Brokerage</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>

              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index}>
                    <td className="p-3 fw-semibold">{item.product}</td>

                    <td className="p-3">
                      <span className="fw-bold text-success">
                        {item.brokerage}
                      </span>
                    </td>

                    <td className="p-3 text-secondary">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
