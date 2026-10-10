import React from "react";

const Hero = () => {
  return (
    <section className="py-5 ">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">
              Investing made
              <span className="text-success"> simpler.</span>
            </h1>

            <p className="lead text-secondary">
              Finora is built around a simple idea — investing should be easier
              to understand, easier to manage, and more transparent for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
