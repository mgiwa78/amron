import React from "react";

type Props = {};

const Faqs = (props: Props) => {
  return (
    <>
      <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
        <div className="container">
          <h3 className="mb-35 xl-mb-20 pt-15">Faqs</h3>
          <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li>Faqs</li>
          </ul>
        </div>
        <img
          src="/images/assets/ils_07.svg"
          alt=""
          className=" shapes w-100 illustration"
        />
      </div>

      <div className="faq-section-two mt-130 xl-mt-100 mb-150 xl-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 wow fadeInLeft">
              <div className="faq-sidebar">
                <div className="bg-wrapper">
                  <ul className="style-none">
                    <li>
                      <a href="#Selling">
                        1. <span>Selling</span>
                      </a>
                    </li>
                    <li>
                      <a href="#Renting">
                        2. <span>Renting</span>
                      </a>
                    </li>
                    <li>
                      <a href="#Buying">
                        3. <span>Buying</span>
                      </a>
                    </li>
                    <li>
                      <a href="#Payments">
                        4. <span>Payments</span>
                      </a>
                    </li>
                    <li>
                      <a href="#Terms">
                        5. <span>Terms & Conditions</span>
                      </a>
                    </li>
                    <li>
                      <a href="#Account">
                        6. <span>Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-wrapper text-center mt-35">
                  <h4 className="mb-35">
                    Don’t Find Your <br />
                    Answer?
                  </h4>
                  <a href="contact.html" className="btn-five">
                    Contact us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 md-pt-90"
                  id="Selling"
                >
                  SELLING
                </div>
                <div className="accordion p0" id="accordionTwo">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneA"
                        aria-expanded="false"
                        aria-controls="collapseOneA"
                      >
                        How does the free trial work?
                      </button>
                    </h2>
                    <div
                      id="collapseOneA"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoA"
                        aria-expanded="false"
                        aria-controls="collapseTwoA"
                      >
                        How do you weigh different criteria in your process?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoA"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeA"
                        aria-expanded="true"
                        aria-controls="collapseThreeA"
                      >
                        What’s the process of selling property?
                      </button>
                    </h2>
                    <div
                      id="collapseThreeA"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourA"
                        aria-expanded="false"
                        aria-controls="collapseFourA"
                      >
                        Refund & Frauds
                      </button>
                    </h2>
                    <div
                      id="collapseFourA"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 pt-90"
                  id="Renting"
                >
                  RENTING
                </div>
                <div className="accordion p0" id="accordionThree">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneB"
                        aria-expanded="false"
                        aria-controls="collapseOneB"
                      >
                        Can a home depreciate in value?
                      </button>
                    </h2>
                    <div
                      id="collapseOneB"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionThree"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoB"
                        aria-expanded="false"
                        aria-controls="collapseTwoB"
                      >
                        Is an older home as good a value as a new home?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoB"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionThree"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeB"
                        aria-expanded="true"
                        aria-controls="collapseThreeB"
                      >
                        What is a broker?
                      </button>
                    </h2>
                    <div
                      id="collapseThreeB"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionThree"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourB"
                        aria-expanded="false"
                        aria-controls="collapseFourB"
                      >
                        Can I pay my own taxes and insurance?
                      </button>
                    </h2>
                    <div
                      id="collapseFourB"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionThree"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 pt-90"
                  id="Buying"
                >
                  Buying
                </div>
                <div className="accordion p0" id="accordionFour">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneC"
                        aria-expanded="false"
                        aria-controls="collapseOneC"
                      >
                        How does the free trial work?
                      </button>
                    </h2>
                    <div
                      id="collapseOneC"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFour"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoC"
                        aria-expanded="false"
                        aria-controls="collapseTwoC"
                      >
                        How do you weigh different criteria in your process?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoC"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFour"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeC"
                        aria-expanded="true"
                        aria-controls="collapseThreeC"
                      >
                        Refund & Frauds
                      </button>
                    </h2>
                    <div
                      id="collapseThreeC"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFour"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 pt-90"
                  id="Payments"
                >
                  Payments
                </div>
                <div className="accordion p0" id="accordionFive">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneD"
                        aria-expanded="false"
                        aria-controls="collapseOneD"
                      >
                        Which payment method is supported?
                      </button>
                    </h2>
                    <div
                      id="collapseOneD"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFive"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoD"
                        aria-expanded="false"
                        aria-controls="collapseTwoD"
                      >
                        Is my card is secure here?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoD"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFive"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeD"
                        aria-expanded="true"
                        aria-controls="collapseThreeD"
                      >
                        Can I provide cheque to my client for payment?
                      </button>
                    </h2>
                    <div
                      id="collapseThreeD"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFive"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 pt-90"
                  id="Terms"
                >
                  Terms & Conditions
                </div>
                <div className="accordion p0" id="accordionSix">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneE"
                        aria-expanded="false"
                        aria-controls="collapseOneE"
                      >
                        How does the free trial work?
                      </button>
                    </h2>
                    <div
                      id="collapseOneE"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionSix"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoE"
                        aria-expanded="false"
                        aria-controls="collapseTwoE"
                      >
                        How do you weigh different criteria in your process?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoE"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionSix"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-style-two no-bg p0 ms-xl-5">
                <div
                  className="accordion-title text-uppercase fw-500 pt-90"
                  id="Account"
                >
                  Account
                </div>
                <div className="accordion p0" id="accordionSeven">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneF"
                        aria-expanded="false"
                        aria-controls="collapseOneF"
                      >
                        Can a home depreciate in value?
                      </button>
                    </h2>
                    <div
                      id="collapseOneF"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionSeven"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoF"
                        aria-expanded="false"
                        aria-controls="collapseTwoF"
                      >
                        Is an older home as good a value as a new home?
                      </button>
                    </h2>
                    <div
                      id="collapseTwoF"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionSeven"
                    >
                      <div className="accordion-body">
                        <p>
                          Quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
