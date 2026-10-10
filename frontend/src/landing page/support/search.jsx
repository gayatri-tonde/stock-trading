import React from "react";

export default function Search() {
  return (
    <>
      <div>
        <form className="px-5">
          <div className="mb-3">
            <input
              type="search"
              className="form-control py-3 border border-light-subtle"
              id="search"
              aria-describedby="search"
              placeholder="Eg. How to open account"
            />
          </div>
        </form>
      </div>
    </>
  );
}
