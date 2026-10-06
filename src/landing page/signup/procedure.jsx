import React from "react";

const Procedure = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Enter your basic details and create your Finora account in just a few steps.",
    },
    {
      number: "02",
      title: "Set Up Your Profile",
      description:
        "Complete your profile and customize your investment experience.",
    },
    {
      number: "03",
      title: "Start Exploring",
      description:
        "Access markets, build your watchlist, and explore investment opportunities.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Getting started is simple</h2>

          <p className="text-secondary">
            Three simple steps to begin your Finora journey.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-md-4" key={index}>
              <div className="text-center px-3">
                <div
                  className="mx-auto mb-4 bg-success text-white
                  rounded-circle d-flex align-items-center
                  justify-content-center fw-bold"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  {step.number}
                </div>

                <h5 className="fw-bold">{step.title}</h5>

                <p className="text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedure;
