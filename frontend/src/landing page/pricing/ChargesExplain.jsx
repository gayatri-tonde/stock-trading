import React from "react";
const charges = [
  {
    title: "Securities Transaction Tax (STT)",
    description:
      "A government tax charged on eligible transactions involving securities. The rate depends on the type of transaction.",
  },
  {
    title: "Exchange Transaction Charges",
    description:
      "Charges collected by the stock exchanges for executing transactions on their platforms.",
  },
  {
    title: "GST",
    description:
      "Goods and Services Tax is applicable on brokerage and certain transaction-related services.",
  },
  {
    title: "SEBI Charges",
    description:
      "A small regulatory charge collected on transactions as prescribed by SEBI.",
  },
  {
    title: "Stamp Duty",
    description:
      "A government levy applicable to certain securities transactions. Rates can vary based on the transaction type.",
  },
  {
    title: "DP Charges",
    description:
      "Depository Participant charges may apply when securities are debited from your demat account.",
  },
];

export default function ChargesExplain() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Understanding other charges</h2>

            <p className="text-secondary">
              Brokerage is only one part of the total transaction cost.
            </p>
          </div>

          <div className="row g-4">
            {charges.map((charge, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="h-100 bg-white rounded-4 p-4 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="bg-success-subtle text-success rounded-circle
                    d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                    >
                      ✓
                    </div>

                    <div>
                      <h6 className="fw-bold mb-2">{charge.title}</h6>

                      <p className="text-secondary small mb-0">
                        {charge.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DISCLAIMER */}

          <div className="mt-5">
            <div className="alert alert-secondary border-0 rounded-4">
              <h6 className="fw-bold">Important</h6>

              <p className="small text-secondary mb-0">
                The charges mentioned above are for informational and
                demonstration purposes. Applicable taxes, statutory charges,
                exchange fees and regulatory charges may vary. Finora is a
                project/demo platform and does not facilitate real-money trading
                or provide investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
