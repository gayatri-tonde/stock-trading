import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid bg-body-tertiary mt-5 px-5 pt-3 ">
      <div className="row px-5  m-3">
        <div className="col-lg-3 text-center pb-3">
          <img src="images/Finora Green Fintech Logo.png" width="50%" />
          <div style={{ fontSize: "0.75rem" }}>
            &copy; 2026 Finora. All rights reserved.
          </div>
          <div className="mt-2 fs-5">
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            &nbsp;
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            &nbsp;
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            &nbsp;
            <a href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            &nbsp;
            <a href="/">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            &nbsp;
            <a href="/">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-3 text-center pb-3">
          <h5>Platform</h5>
          <a href="/">Home </a> <br />
          <a href="/">Markets </a> <br />
          <a href="/">Stocks </a> <br />
          <a href="/">Portfolio</a> <br />
        </div>
        <div className="col-lg-3 text-center pb-3">
          <h5>Company</h5>
          <a href="/">About Us </a> <br />
          <a href="/">Careers </a> <br />
          <a href="/">Contact Us </a> <br />
          <a href="/">Help & Support</a> <br />
        </div>
        <div className="col-lg-3 text-center pb-3">
          <h5>Resources</h5>
          <a href="/">Trading Guide </a> <br />
          <a href="/">Legal Documents</a> <br />
          <a href="/">Pricing </a> <br />
          <a href="/">FAQ</a> <br />
        </div>
      </div>
      <div
        className="row px-3 my-3"
        style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
      >
        <p>
          <b>Disclaimer:</b> Finora is a project/demo platform created for
          educational and demonstration purposes only. The information, market
          data, charts, prices, analysis, and other content displayed on this
          website are provided for illustrative purposes and should not be
          considered financial, investment, trading, legal, or tax advice. Users
          should conduct their own research and, where appropriate, consult a
          qualified financial professional before making investment decisions.
          Investments in securities and other financial instruments are subject
          to market risks, including the possible loss of principal. <br />{" "}
          Finora does not provide personalized investment recommendations,
          guarantee profits or returns, or represent that any investment
          strategy will achieve a particular outcome. Past performance of any
          security, strategy, or market does not guarantee future results.
          Finora does not execute real trades, hold user funds, provide
          brokerage services, or facilitate real-money investments through this
          platform. By using this website, you acknowledge that you understand
          its educational and demonstrative nature and agree not to treat the
          information presented as a substitute for professional financial
          advice.
        </p>
      </div>
      <div className="col px-5 mx-3 text-center">
        <a href="/">Terms & Conditions</a> &nbsp;&nbsp;&nbsp;
        <a href="/">Privacy Policy</a> &nbsp;&nbsp;&nbsp;
        <a href="/">Risk Disclosure</a>
      </div>
    </footer>
  );
}
