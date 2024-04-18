import React from "react";

type Props = {};

const Properties = (props: Props) => {
  return (
    <>
      <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
        <div className="container">
          <h3 className="mb-35 xl-mb-20 pt-15">Properties </h3>
          <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li> Properties</li>
          </ul>
        </div>
        <img
          src="/images/assets/ils_07.svg"
          alt=""
          className=" shapes w-100 illustration"
        />
      </div>
      <div className="property-listing-six pt-10 xl-pt-10 pb-200 xl-pb-120">
        <div className="container container-large">
          <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
            <div className="bg-wrapper rounded-0 border-0">
              <form action="#">
                <div className="row gx-0 align-items-center">
                  <div className="col-xxl-2 col-xl-3 col-lg-4">
                    <div className="input-box-one border-left">
                      <div className="label">I’m looking to...</div>
                      <select className="nice-select fw-normal">
                        <option value="1">Buy Apartments</option>
                        <option value="2">Buy Condos</option>
                        <option value="3">Buy Houses</option>
                        <option value="4">Buy Industrial</option>
                        <option value="6">Buy Villas</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                    <div className="input-box-one border-left">
                      <div className="label">Location</div>
                      <select className="nice-select location fw-normal">
                        <option value="1">Dhanmondi, Dhaka</option>
                        <option value="2">Acapulco, Mexico</option>
                        <option value="3">Berlin, Germany</option>
                        <option value="4">Cannes, France</option>
                        <option value="5">Delhi, India</option>
                        <option value="6">Giza, Egypt </option>
                        <option value="7">Havana, Cuba</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                    <div className="input-box-one border-left border-lg-0">
                      <div className="label">Price Range</div>
                      <select className="nice-select fw-normal">
                        <option value="1">₦10,000 - ₦200,000</option>
                        <option value="2">₦200,000 - ₦300,000</option>
                        <option value="2">₦300,000 - ₦400,000</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-3">
                    <div className="input-box-one lg-mt-20">
                      <div className="d-flex align-items-center justify-content-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#advanceFilterModal"
                          className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3"
                        >
                          <span className="d-xl-none d-xxl-block">
                            ADVANCE Search
                          </span>
                          <i className="fa-light fa-sliders-up"></i>
                        </a>
                        <button className="fw-500 text-uppercase tran3s search-btn-four">
                          <span>Search</span>
                          <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
            <div>
              Showing <span className="color-dark fw-500">1–9</span> of{" "}
              <span className="color-dark fw-500">1,230</span> results
            </div>
            <div className="d-flex align-items-center xs-mt-20">
              <div className="short-filter d-flex align-items-center">
                <div className="fs-16 me-2">Short by:</div>
                <select className="nice-select rounded-0">
                  <option value="0">Newest</option>
                  <option value="1">Best Seller</option>
                  <option value="2">Best Match</option>
                  <option value="3">Price Low</option>
                  <option value="4">Price High</option>
                </select>
              </div>
              <a
                href="listing_08.html"
                className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                data-bs-toggle="tooltip"
                title="Switch To List View"
              >
                <i className="fa-regular fa-bars"></i>
              </a>
            </div>
          </div>

          <div className="row gx-xxl-5">
            <div className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp">
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR RENT</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel1" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel1"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel1"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel1"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    Blueberry villa
                  </a>
                  <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1370</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">03</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bath
                      </span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      ₦1,710/<sub>m</sub>
                    </strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR SELL</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel2" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel2"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel2"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel2"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    White House villa
                  </a>
                  <div className="address">Muza link road, ca, usa</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bath
                      </span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">₦37,200</strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR SELL</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel3" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel3"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel3"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel3"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    Blueberry villa
                  </a>
                  <div className="address">Mirpur 10, Stadium</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">02 bath</span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">₦28,300</strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp">
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR RENT</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel4" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel4"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel4"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel4"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_32.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    White House villa
                  </a>
                  <div className="address">Muza link road, ca, usa</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">02 bath</span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      ₦2,370/<sub>m</sub>
                    </strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR RENT</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel5" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel5"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel5"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel5"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_33.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    Blueberry villa
                  </a>
                  <div className="address">Mirpur 10, Stadium</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">02 bath</span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      ₦1,329/<sub>m</sub>
                    </strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR SELL</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel6" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel6"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel6"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel6"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_34.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    White House villa
                  </a>
                  <div className="address">Muza link road, ca, usa</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">02 bath</span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">₦28,100</strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp">
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR RENT</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel7" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel7"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel7"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel7"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    Blueberry villa
                  </a>
                  <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1370</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">03</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bath
                      </span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      ₦1,710/<sub>m</sub>
                    </strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR SELL</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel8" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel8"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel8"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel8"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    White House villa
                  </a>
                  <div className="address">Muza link road, ca, usa</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bath
                      </span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">₦37,200</strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className="tag fw-500">FOR SELL</div>
                    <a href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </a>
                    <div id="carousel9" className="carousel slide">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel9"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel9"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel9"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_19.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_18.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div
                          className="carousel-item"
                          data-bs-interval="1000000"
                        >
                          <a href="#" className="d-block">
                            <img
                              src="/images/listing/img_17.jpg"
                              className="w-100"
                              alt="..."
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <a href="listing_details_06.html" className="title tran3s">
                    Blueberry villa
                  </a>
                  <div className="address">Mirpur 10, Stadium</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_32.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">1270</span> sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_33.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">02</span> bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icon/icon_34.svg"
                        alt=""
                        className=" icon me-2"
                      />
                      <span className="fs-16">02 bath</span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">₦28,300</strong>
                    <a href="listing_details_06.html" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30">
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>....</li>
            <li className="ms-2">
              <a href="#" className="d-flex align-items-center">
                Last{" "}
                <img src="/images/icon/icon_46.svg" alt="" className="ms-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Properties;
