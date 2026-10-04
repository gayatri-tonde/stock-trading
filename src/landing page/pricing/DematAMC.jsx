import React from "react";

export default function DematAMC() {
  return (
    <>
      <section className="py-5 bg-light ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded-4 p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <span className="badge bg-success-subtle text-success mb-3">
                      Demat Account
                    </span>

                    <h2 className="fw-bold">Annual Maintenance Charges</h2>

                    <p className="text-secondary">
                      Your demat account may attract an annual maintenance
                      charge depending on the account type and applicable
                      regulations.
                    </p>

                    <p className="text-secondary mb-0">
                      All applicable charges are displayed transparently so you
                      know what you're paying for.
                    </p>
                  </div>

                  <div className="col-md-5 mt-4 mt-md-0">
                    <div className="bg-light rounded-4 p-4 text-center">
                      <p className="text-secondary mb-1">Annual Maintenance</p>

                      <h1 className="fw-bold text-success">₹300</h1>

                      <small className="text-secondary">
                        + applicable taxes
                      </small>
                    </div>
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
