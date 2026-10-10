import React from "react";

const Investment = () => {
  const options = [
    {
      icon: "📈",
      title: "Stocks",
      description:
        "Explore listed companies, track prices, and discover market opportunities.",
    },
    {
      icon: "💰",
      title: "Mutual Funds",
      description:
        "Explore mutual fund options and understand their performance and returns.",
    },
    {
      icon: "⚡",
      title: "Intraday",
      description:
        "Explore short-term market movements and monitor intraday opportunities.",
    },
    {
      icon: "📊",
      title: "Market Insights",
      description:
        "Understand market trends through charts, data, and easy-to-read insights.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Invest your way</h2>

          <p className="text-secondary">
            Explore different investment opportunities through Finora.
          </p>
        </div>

        <div className="row g-4">
          {options.map((option, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div
                    className="bg-success-subtle rounded-circle
                    d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <span className="fs-4">{option.icon}</span>
                  </div>

                  <h5 className="fw-bold">{option.title}</h5>

                  <p className="text-secondary small mb-0">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;
