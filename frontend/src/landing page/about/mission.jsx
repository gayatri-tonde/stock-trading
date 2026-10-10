import React from "react";

const Mission = () => {
  return (
    <section className="py-3">
      <div className="container ">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="text-success fw-semibold">OUR MISSION</span>

            <h2 className="fw-bold display-6 mt-2 mb-4">
              Making financial information easier to understand
            </h2>

            <p className="text-secondary">
              Financial markets can often feel complicated, especially when
              information is scattered across different platforms. Finora brings
              essential market information, portfolio insights, and investment
              tools together in one place.
            </p>

            <p className="text-secondary mb-0">
              Our goal is to create a clean and intuitive experience that helps
              users explore markets, understand their options, and make more
              informed decisions.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="bg-light rounded-4 p-4 p-md-5">
              <div className="row g-4">
                <div className="col-6">
                  <h2 className="fw-bold">Simple</h2>
                  <p className="small text-secondary">
                    Clear information without unnecessary complexity.
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="fw-bold ">Transparent</h2>
                  <p className="small text-secondary">
                    Straightforward information and pricing.
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="fw-bold">Accessible</h2>
                  <p className="small text-secondary">
                    Designed to be easy for everyone to navigate.
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="fw-bold">Insightful</h2>
                  <p className="small text-secondary">
                    Useful data presented in an understandable way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
