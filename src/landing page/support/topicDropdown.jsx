import { useState } from "react";

export default function TopicDropdown() {
  const [expandedTopics, setExpandedTopics] = useState({});

  function toggleTopic(topic) {
    setExpandedTopics((current) => ({
      ...current,
      [topic]: !current[topic],
    }));
  }

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row mx-5 mb-4">
          <div className="col-9 px-5">
            <div>
              <button
                className="btn text-start fs-5   mt-4 py-3 px-4 border  w-100"
                type="button"
                onClick={() => toggleTopic("accountOpening")}
                aria-expanded={Boolean(expandedTopics.accountOpening)}
                aria-controls="collapse1"
              >
                Account Opening
              </button>

              <div
                className={
                  expandedTopics.accountOpening ? "collapse show" : "collapse"
                }
                id="collapse1"
              >
                <div className="card card-body">
                  <ul>
                    <li>
                      <a href="/#">Resident individual</a>
                    </li>
                    <li>
                      <a href="/#"> Minor</a>
                    </li>
                    <li>
                      <a href="/#">Non Resisdent Indian (NRI)</a>
                    </li>
                    <li>
                      <a href="/#">Company, Partnership</a>
                    </li>
                    <li>
                      <a href="/#">GLossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn text-start fs-5   mt-4 py-3 px-4 border  w-100"
                type="button"
                onClick={() => toggleTopic("yourAccount")}
                aria-expanded={Boolean(expandedTopics.yourAccount)}
                aria-controls="collapse2"
              >
                Your Account
              </button>

              <div
                className={
                  expandedTopics.yourAccount ? "collapse show" : "collapse"
                }
                id="collapse2"
              >
                <div class="card card-body">
                  <ul>
                    <li>
                      <a href="/#">Your Profile</a>
                    </li>
                    <li>
                      <a href="/#">Account modification</a>
                    </li>
                    <li>
                      <a href="/#">Client Master Report (CMR)</a>
                    </li>
                    <li>
                      <a href="/#">Nomination</a>
                    </li>
                    <li>
                      <a href="/#">Transfer and conersion of securities</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn  text-start fs-5   mt-4 py-3 px-4 border  w-100"
                type="button"
                onClick={() => toggleTopic("platform")}
                aria-expanded={Boolean(expandedTopics.platform)}
                aria-controls="collapse3"
              >
                Platform
              </button>

              <div
                className={
                  expandedTopics.platform ? "collapse show" : "collapse"
                }
                id="collapse3"
              >
                <div class="card card-body">
                  <ul>
                    <li>
                      <a href="/#">IPO</a>
                    </li>
                    <li>
                      <a href="/#">Trading FAQs</a>
                    </li>
                    <li>
                      <a href="/#">Margin Trading Facility(MTF)</a>
                    </li>
                    <li>
                      <a href="/#">Charts and orders </a>
                    </li>
                    <li>
                      <a href="/#">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn  text-start fs-5   mt-4 py-3 px-4 border  w-100"
                type="button"
                onClick={() => toggleTopic("fund")}
                aria-expanded={Boolean(expandedTopics.fund)}
                aria-controls="collapse4"
              >
                Fund
              </button>
              <div
                className={expandedTopics.fund ? "collapse show" : "collapse"}
                id="collapse4"
              >
                <div class="card card-body">
                  <ul>
                    <li>
                      <a href="/#">Add Money </a>
                    </li>
                    <li>
                      <a href="/#">Withdraw Money </a>
                    </li>
                    <li>
                      <a href="/#">Add bank accounts </a>
                    </li>
                    <li>
                      <a href="/#">eMandates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3  pr-5 py-4">
            <div className="card">
              <ol class="list-group list-group-numbered">
                <div className="card-header bg-light">Quick Links</div>

                <li class="list-group-item">
                  <a href="/#">Learn how to create ticket</a>
                </li>
                <li class="list-group-item">
                  <a href="/#">Track Account opening</a>
                </li>
                <li class="list-group-item">
                  <a href="/#">Track segment activation</a>
                </li>
                <li class="list-group-item">
                  <a href="/#">Intrday margins </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
