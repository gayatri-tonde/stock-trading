import React from "react";

const WhyFinora = () => {
  const points = [
    {
      title: "Clarity over complexity",
      description:
        "We believe financial information should be understandable. Finora focuses on presenting data in a clean and meaningful way.",
    },
    {
      title: "Transparency at every step",
      description:
        "From pricing to market information, we aim to make the information users need easy to find and understand.",
    },
    {
      title: "Designed around the user",
      description:
        "Every part of the platform is designed with simplicity, accessibility, and ease of navigation in mind.",
    },
    {
      title: "Technology with purpose",
      description:
        "We use modern technology to create useful tools that make exploring financial markets more intuitive.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h1 className="text-success fw-bold">WHY FINORA ?</h1>

            <h3 className="display-6 fw-bold mt-2">
              Built around what matters
            </h3>

            <p className="text-secondary mt-3">
              We don't believe investing needs to feel overwhelming. Finora
              focuses on the essentials and presents them in a way that is
              simple, organized, and easy to explore.
            </p>
          </div>

          <div className="col-lg-7">
            {points.map((point, index) => (
              <div className="d-flex gap-4 mb-4 pb-4 border-bottom" key={index}>
                <div>
                  <h5 className="fw-bold">{point.title}</h5>

                  <p className="text-secondary mb-0">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFinora;
