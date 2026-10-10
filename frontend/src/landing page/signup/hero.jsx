import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" container text-center px-5 m-5">
        <div className="row">
          <h3 className="m-5">Open a free demat and trading account online</h3>
          <div>
            <h2 className="fw-bold">Sign Up</h2>
            <form className="px-5">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check" />
                <label class="form-check-label" for="check">
                  I agree all the <a>Terms & Conditions</a>
                </label>
              </div>
              <button type="submit" class="btn btn-success">
                Get OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
