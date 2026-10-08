import React from "react";
import Search from "./search";
import Myticket from "./myTicket";

export default function Hero() {
  return (
    <>
      <section className="container-fluid bg-secondary-subtle py-4 px-5">
        <div className="row mx-5">
          <div className="col">
            <h1>Support Portal</h1>
          </div>
          <div className="col text-end">
            <Myticket />
          </div>
        </div>
        <div className="row mt-4 mx-4 ">
          <Search />
        </div>
      </section>
    </>
  );
}
