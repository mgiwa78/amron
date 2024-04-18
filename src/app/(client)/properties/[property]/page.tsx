import React from "react";

type Props = {};

const ViewProperty = (props: Props) => {
  return (
    <div className="listing-details-one theme-details-one border-top mt-130 lg-mt-100 pt-70 pb-150 xl-pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="property-titlee">
              Luxury Apartments on California.
            </h3>
            <div className="d-flex flex-wrap mt-10">
              <div className="list-type text-uppercase mt-15 me-3">
                FOR SELL
              </div>
              <div className="address mt-15">
                <i className="bi bi-geo-alt"></i> 3891 Ranchview Dr. Richardson,
                California
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="d-inline-block md-mt-40">
              <div className="price color-dark fw-500">Price: ₦1,67,000</div>
              <div className="est-price fs-20 mt-25 mb-35 md-mb-30">
                Est. Payment{" "}
                <span className="fw-500 color-dark">₦8,343/mo*</span>
              </div>
              <ul className="style-none d-flex align-items-center action-btns">
                <li className="me-auto fw-500 color-dark">
                  <i className="fa-sharp fa-regular fa-share-nodes me-2"></i>{" "}
                  Share
                </li>
                <li>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="fa-light fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="fa-light fa-bookmark"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="fa-light fa-circle-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="media-gallery position-relative mt-100 xl-mt-80 lg-mt-60">
          <div className="media-slider-two">
            <div className="item">
              <img src="/images/listing/img_57.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
              <img src="/images/listing/img_58.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
              <img src="/images/listing/img_59.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
              <img src="/images/listing/img_60.jpg" alt="" className="w-100" />
            </div>
          </div>
          <ul className="slider-arrows d-flex justify-content-between style-none">
            <li className="prev_c slick-arrow">
              <i className="bi bi-arrow-left"></i>
            </li>
            <li className="next_c slick-arrow">
              <i className="bi bi-arrow-right"></i>
            </li>
          </ul>
        </div>
        <div className="property-feature-list position-relative z-2 pb-65">
          <div className="row">
            <div className="col-xl-8">
              <div className="dark-bg ps-5 pe-5 pt-25 pb-25 m-inverse">
                <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                  <li>
                    <img
                      src="/images/icon/icon_58.svg"
                      alt=""
                      className=" icon sm"
                    />
                    <span className="fs-20 text-white">Sqft . 3,720</span>
                  </li>
                  <li>
                    <img
                      src="/images/icon/icon_59.svg"
                      alt=""
                      className=" icon sm"
                    />
                    <span className="fs-20 text-white">Bed . 03</span>
                  </li>
                  <li>
                    <img
                      src="/images/icon/icon_60.svg"
                      alt=""
                      className=" icon sm"
                    />
                    <span className="fs-20 text-white">Bath . 2</span>
                  </li>
                  <li>
                    <img
                      src="/images/icon/icon_61.svg"
                      alt=""
                      className=" icon sm"
                    />
                    <span className="fs-20 text-white">Kitchen . 01</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="property-overview bottom-line-dark pb-40 mb-60">
              <h4 className="mb-20">Overview</h4>
              <p className="fs-20 lh-lg">
                Risk management and compliance, when approached strategically,
                have the potential to go beyond mitigating threats and
                protecting a company’s operations & reputation.They can actually
                generate value and create opportunities.{" "}
              </p>
            </div>
            <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
              <h4 className="mb-20">Property Features</h4>
              <p className="fs-20 lh-lg">
                Risk management and compliance, when approached strategically,
                have the potential to go beyond mitigating threats.
              </p>

              <div className="accordion-style-two grey-bg mt-45">
                <div className="accordion" id="accordionTwo">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOneA"
                        aria-expanded="false"
                        aria-controls="collapseOneA"
                      >
                        Property Details
                      </button>
                    </h2>
                    <div
                      id="collapseOneA"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <div className="feature-list-two">
                          <ul className="style-none d-flex flex-wrap justify-content-between">
                            <li>
                              <span>Bedrooms: </span>{" "}
                              <span className="fw-500 color-dark">03</span>
                            </li>
                            <li>
                              <span>Furnishing: </span>{" "}
                              <span className="fw-500 color-dark">
                                Semi furnished
                              </span>
                            </li>
                            <li>
                              <span>Bathrooms: </span>{" "}
                              <span className="fw-500 color-dark">02</span>
                            </li>
                            <li>
                              <span>Year Built: </span>{" "}
                              <span className="fw-500 color-dark">2010</span>
                            </li>
                            <li>
                              <span>Floor: </span>{" "}
                              <span className="fw-500 color-dark">Ground</span>
                            </li>
                            <li>
                              <span>Garage: </span>{" "}
                              <span className="fw-500 color-dark">03</span>
                            </li>
                            <li>
                              <span>Ceiling Height: </span>{" "}
                              <span className="fw-500 color-dark">3.2m</span>
                            </li>
                            <li>
                              <span>Property Type: </span>{" "}
                              <span className="fw-500 color-dark">
                                Apartment
                              </span>
                            </li>
                            <li>
                              <span>Renovation: </span>{" "}
                              <span className="fw-500 color-dark">3.2m</span>
                            </li>
                            <li>
                              <span>Status: </span>{" "}
                              <span className="fw-500 color-dark">
                                For Sale
                              </span>
                            </li>
                          </ul>
                        </div>
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
                        Utility Details
                      </button>
                    </h2>
                    <div
                      id="collapseTwoA"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <div className="feature-list-two">
                          <ul className="style-none d-flex flex-wrap justify-content-between">
                            <li>
                              <span>Heating: </span>{" "}
                              <span className="fw-500 color-dark">
                                Natural gas{" "}
                              </span>
                            </li>
                            <li>
                              <span>Intercom: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>Air Condition: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>Window Type: </span>{" "}
                              <span className="fw-500 color-dark">
                                Aluminum frame{" "}
                              </span>
                            </li>
                            <li>
                              <span>Fireplace: </span>{" "}
                              <span className="fw-500 color-dark">--</span>
                            </li>
                            <li>
                              <span>Cable TV: </span>{" "}
                              <span className="fw-500 color-dark">--</span>
                            </li>
                            <li>
                              <span>Elevator: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>WiFi: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>Ventilation: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThreeA"
                        aria-expanded="true"
                        aria-controls="collapseThreeA"
                      >
                        Outdoor Features
                      </button>
                    </h2>
                    <div
                      id="collapseThreeA"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body">
                        <div className="feature-list-two">
                          <ul className="style-none d-flex flex-wrap justify-content-between">
                            <li>
                              <span>Garage: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>Parking: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                            <li>
                              <span>Garden: </span>{" "}
                              <span className="fw-500 color-dark">30m2</span>
                            </li>
                            <li>
                              <span>Disabled Access: </span>{" "}
                              <span className="fw-500 color-dark">Ramp</span>
                            </li>
                            <li>
                              <span>Swimming Pool: </span>{" "}
                              <span className="fw-500 color-dark">--</span>
                            </li>
                            <li>
                              <span>Fence: </span>{" "}
                              <span className="fw-500 color-dark">--</span>
                            </li>
                            <li>
                              <span>Security: </span>{" "}
                              <span className="fw-500 color-dark">
                                3 Cameras
                              </span>
                            </li>
                            <li>
                              <span>Pet Friendly: </span>{" "}
                              <span className="fw-500 color-dark">Yes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="property-amenities bottom-line-dark pb-40 mb-60">
              <h4 className="mb-20">Amenities</h4>
              <p className="fs-20 lh-lg pb-25">
                Risk management and compliance, when approached strategically,
                have the potential to go beyond mitigating threats and
                protecting a company’s
              </p>
              <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
                <li>A/C & Heating</li>
                <li>Garages</li>
                <li>Swimming Pool</li>
                <li>Parking</li>
                <li>Garden</li>
                <li>Disabled Access</li>
                <li>Pet Friendly</li>
                <li>Ceiling Height</li>
                <li>Refrigerator</li>
                <li>Fireplace</li>
                <li>Elevator</li>
                <li>Wifi</li>
              </ul>
            </div>

            <div className="property-video-tour bottom-line-dark pb-40 mb-60">
              <h4 className="mb-40">Video Tour</h4>
              <div className="position-relative border-15 image-bg overflow-hidden z-1">
                <img
                  src="/images/listing/img_47.jpg"
                  alt=""
                  className=" w-100"
                />
                <a
                  className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
                  data-fancybox
                  href="https://www.youtube.com/embed/aXFSJTjVjw0"
                >
                  <i className="fa-thin fa-play"></i>
                </a>
              </div>
            </div>

            <div className="property-floor-plan bottom-line-dark pb-40 mb-60">
              <h4 className="mb-40">Floor Plans</h4>
              <div className="bg-dot p-30">
                <div id="floor-plan" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#floor-plan"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#floor-plan"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#floor-plan"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/images/listing/floor_1.jpg"
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/listing/floor_2.jpg"
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/listing/floor_1.jpg"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="property-nearby bottom-line-dark pb-40 mb-60">
              <h4 className="mb-20">What’s Nearby</h4>
              <p className="fs-20 lh-lg pb-30">
                Risk management and compliance, when approached strategically,
                have th potential to go beyond mitigating threats.
              </p>
              <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
                <li>
                  School & Collage:{" "}
                  <span className="fw-500 color-dark">0.9km</span>
                </li>
                <li>
                  Grocery Center:{" "}
                  <span className="fw-500 color-dark">0.2km</span>
                </li>
                <li>
                  Metro Station:{" "}
                  <span className="fw-500 color-dark">0.7km</span>
                </li>
                <li>
                  Gym: <span className="fw-500 color-dark">2.3km</span>
                </li>
                <li>
                  University: <span className="fw-500 color-dark">2.7km</span>
                </li>
                <li>
                  Hospital: <span className="fw-500 color-dark">1.7km</span>
                </li>
                <li>
                  Shopping Mall: <span className="fw-500 color-dark">1.1m</span>
                </li>
                <li>
                  Police Station:{" "}
                  <span className="fw-500 color-dark">1.2m</span>
                </li>
                <li>
                  Bus Station: <span className="fw-500 color-dark"> 1.1m</span>
                </li>
                <li>
                  River: <span className="fw-500 color-dark">3.1km</span>
                </li>
                <li>
                  Market: <span className="fw-500 color-dark">3.4m</span>
                </li>
              </ul>
            </div>

            <div className="similar-property bottom-line-dark pb-20 mb-60">
              <h4 className="mb-40">Similar Homes You May Like</h4>
              <div className="similar-listing-slider-two">
                <div className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div className="tag bg-white text-dark fw-500">
                          FOR RENT
                        </div>
                        <img
                          src="/images/listing/img_13.jpg"
                          className="w-100"
                          alt="..."
                        />

                        <div className="img-slider-btn">
                          03 <i className="fa-regular fa-image"></i>
                          <a
                            href="/images/listing/img_large_01.jpg"
                            className="d-block"
                            data-fancybox="img1"
                            data-caption="Blueberry villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_02.jpg"
                            className="d-block"
                            data-fancybox="img1"
                            data-caption="Blueberry villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_03.jpg"
                            className="d-block"
                            data-fancybox="img1"
                            data-caption="Blueberry villa"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="property-info d-flex justify-content-between align-items-end pt-30">
                      <div>
                        <strong className="price fw-500 color-dark">
                          ₦34,900
                        </strong>
                        <div className="address m0">
                          Mirpur 10, Stadium dhaka
                        </div>
                      </div>
                      <a
                        href="listing_details_01.html"
                        className="btn-four mb-5"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div className="tag bg-white text-dark fw-500">
                          FOR SELL
                        </div>
                        <img
                          src="/images/listing/img_14.jpg"
                          className="w-100"
                          alt="..."
                        />
                        <div className="img-slider-btn">
                          03 <i className="fa-regular fa-image"></i>
                          <a
                            href="/images/listing/img_large_04.jpg"
                            className="d-block"
                            data-fancybox="img2"
                            data-caption="White House villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_05.jpg"
                            className="d-block"
                            data-fancybox="img2"
                            data-caption="White House villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_06.jpg"
                            className="d-block"
                            data-fancybox="img2"
                            data-caption="White House villa"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="property-info d-flex justify-content-between align-items-end pt-30">
                      <div>
                        <strong className="price fw-500 color-dark">
                          ₦28,710
                        </strong>
                        <div className="address m0">
                          Mirpur 10, Stadium dhaka
                        </div>
                      </div>
                      <a
                        href="listing_details_01.html"
                        className="btn-four mb-5"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div className="tag bg-white text-dark fw-500">
                          FOR SELL
                        </div>
                        <img
                          src="/images/listing/img_15.jpg"
                          className="w-100"
                          alt="..."
                        />
                        <div className="img-slider-btn">
                          04 <i className="fa-regular fa-image"></i>
                          <a
                            href="/images/listing/img_large_01.jpg"
                            className="d-block"
                            data-fancybox="img3"
                            data-caption="Luxury villa in Dal lake."
                          ></a>
                          <a
                            href="/images/listing/img_large_05.jpg"
                            className="d-block"
                            data-fancybox="img3"
                            data-caption="Luxury villa in Dal lake."
                          ></a>
                          <a
                            href="/images/listing/img_large_03.jpg"
                            className="d-block"
                            data-fancybox="img3"
                            data-caption="Luxury villa in Dal lake."
                          ></a>
                          <a
                            href="/images/listing/img_large_02.jpg"
                            className="d-block"
                            data-fancybox="img3"
                            data-caption="Luxury villa in Dal lake."
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="property-info d-flex justify-content-between align-items-end pt-30">
                      <div>
                        <strong className="price fw-500 color-dark">
                          ₦1,23,710
                        </strong>
                        <div className="address m0">
                          Mirpur 10, Stadium dhaka
                        </div>
                      </div>
                      <a
                        href="listing_details_01.html"
                        className="btn-four mb-5"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div className="tag bg-white text-dark fw-500">
                          FOR SELL
                        </div>
                        <img
                          src="/images/listing/img_16.jpg"
                          className="w-100"
                          alt="..."
                        />
                        <div className="img-slider-btn">
                          04 <i className="fa-regular fa-image"></i>
                          <a
                            href="/images/listing/img_large_04.jpg"
                            className="d-block"
                            data-fancybox="img4"
                            data-caption="South Sun House"
                          ></a>
                          <a
                            href="/images/listing/img_large_06.jpg"
                            className="d-block"
                            data-fancybox="img4"
                            data-caption="South Sun House"
                          ></a>
                          <a
                            href="/images/listing/img_large_03.jpg"
                            className="d-block"
                            data-fancybox="img4"
                            data-caption="South Sun House"
                          ></a>
                          <a
                            href="/images/listing/img_large_02.jpg"
                            className="d-block"
                            data-fancybox="img4"
                            data-caption="South Sun House"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="property-info d-flex justify-content-between align-items-end pt-30">
                      <div>
                        <strong className="price fw-500 color-dark">
                          ₦34,900
                        </strong>
                        <div className="address m0">
                          Mirpur 10, Stadium dhaka
                        </div>
                      </div>
                      <a
                        href="listing_details_01.html"
                        className="btn-four mb-5"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div className="tag bg-white text-dark fw-500">
                          FOR SELL
                        </div>
                        <img
                          src="/images/listing/img_14.jpg"
                          className="w-100"
                          alt="..."
                        />
                        <div className="img-slider-btn">
                          03 <i className="fa-regular fa-image"></i>
                          <a
                            href="/images/listing/img_large_04.jpg"
                            className="d-block"
                            data-fancybox="img5"
                            data-caption="White House villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_05.jpg"
                            className="d-block"
                            data-fancybox="img5"
                            data-caption="White House villa"
                          ></a>
                          <a
                            href="/images/listing/img_large_06.jpg"
                            className="d-block"
                            data-fancybox="img5"
                            data-caption="White House villa"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="property-info d-flex justify-content-between align-items-end pt-30">
                      <div>
                        <strong className="price fw-500 color-dark">
                          ₦1,23,710
                        </strong>
                        <div className="address m0">
                          Mirpur 10, Stadium dhaka
                        </div>
                      </div>
                      <a
                        href="listing_details_01.html"
                        className="btn-four mb-5"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="property-score bottom-line-dark pb-40 mb-60">
              <h4 className="mb-20">Walk Score</h4>
              <p className="fs-20 lh-lg pb-30">
                Risk management and compliance, when approached strategically,
                have the potential
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="block d-flex align-items-center mb-50 sm-mb-30">
                    <img
                      src="/images/icon/icon_52.svg"
                      alt=""
                      className=" icon"
                    />
                    <div className="text">
                      <h6>Transit Score</h6>
                      <p className="fs-16 m0">
                        <span className="color-dark">63</span>/100 (Moderate
                        Distance Walkable)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block d-flex align-items-center mb-50 sm-mb-30">
                    <img
                      src="/images/icon/icon_53.svg"
                      alt=""
                      className=" icon"
                    />
                    <div className="text">
                      <h6>School Score</h6>
                      <p className="fs-16 m0">
                        <span className="color-dark">70</span>/100 (Short
                        Distance Walkable)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block d-flex align-items-center mb-20 sm-mb-30">
                    <img
                      src="/images/icon/icon_54.svg"
                      alt=""
                      className=" icon"
                    />
                    <div className="text">
                      <h6>Medical Score</h6>
                      <p className="fs-16 m0">
                        <span className="color-dark">77</span>/100 (Short
                        Distance Walkable)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block d-flex align-items-center mb-20">
                    <img
                      src="/images/icon/icon_55.svg"
                      alt=""
                      className=" icon"
                    />
                    <div className="text">
                      <h6>Shopping Mall Score</h6>
                      <p className="fs-16 m0">
                        <span className="color-dark">42</span>/100 (Long
                        Distance Walkable)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="property-location bottom-line-dark pb-60 mb-60">
              <h4 className="mb-40">Location</h4>
              <div className="wrapper">
                <div className="map-banner overflow-hidden">
                  <div className="gmap_canvas h-100 w-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
                      width="600"
                      height="450"
                      style={{ border: "none" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-100 h-100"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-panel-one bottom-line-dark pb-40 mb-60">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <select className="nice-select rounded-0">
                    <option value="0">Newest</option>
                    <option value="1">Best Seller</option>
                    <option value="2">Best Match</option>
                  </select>
                </div>
                <div className="review-wrapper mb-35">
                  <div className="review">
                    <img
                      src="/images/media/img_01.jpg"
                      alt=""
                      className="rounded-circle avatar"
                    />
                    <div className="text">
                      <div className="d-sm-flex justify-content-between">
                        <div>
                          <h6 className="name">Zubayer Al Hasan</h6>
                          <div className="time fs-16">17 Aug, 23</div>
                        </div>
                        <ul className="rating style-none d-flex xs-mt-10">
                          <li>
                            <span className="fst-italic me-2">
                              (4.7 Rating)
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p className="fs-20 mt-20 mb-30">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque sed
                        nulla facili diam posuere aliquam suscipit quam.
                      </p>
                      <div className="d-flex review-help-btn">
                        <a href="#" className="me-5">
                          <i className="fa-sharp fa-regular fa-thumbs-up"></i>{" "}
                          <span>Helpful</span>
                        </a>
                        <a href="#">
                          <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                          <span>Flag</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="review">
                    <img
                      src="/images/media/img_03.jpg"
                      alt=""
                      className="rounded-circle avatar"
                    />
                    <div className="text">
                      <div className="d-sm-flex justify-content-between">
                        <div>
                          <h6 className="name">Rashed Kabir</h6>
                          <div className="time fs-16">13 Jun, 23</div>
                        </div>
                        <ul className="rating style-none d-flex xs-mt-10">
                          <li>
                            <span className="fst-italic me-2">
                              (4.9 Rating)
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p className="fs-20 mt-20 mb-30">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque sed
                        nulla facili diam posuere aliquam suscipit quam.
                      </p>
                      <ul className="style-none d-flex flex-wrap review-gallery pb-30">
                        <li>
                          <a
                            href="/images/listing/img_large_01.jpg"
                            className="d-block"
                            data-fancybox="revImg"
                            data-caption="Duplex orkit villa"
                          >
                            <img src="/images/listing/img_48.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/images/listing/img_large_02.jpg"
                            className="d-block"
                            data-fancybox="revImg"
                            data-caption="Duplex orkit villa"
                          >
                            <img src="/images/listing/img_49.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/images/listing/img_large_03.jpg"
                            className="d-block"
                            data-fancybox="revImg"
                            data-caption="Duplex orkit villa"
                          >
                            <img src="/images/listing/img_50.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <div className="position-relative more-img">
                            <img src="/images/listing/img_50.jpg" alt="" />
                            <span>13+</span>
                            <a
                              href="/images/listing/img_large_04.jpg"
                              className="d-block"
                              data-fancybox="revImg"
                              data-caption="Duplex orkit villa."
                            ></a>
                            <a
                              href="/images/listing/img_large_05.jpg"
                              className="d-block"
                              data-fancybox="revImg"
                              data-caption="Duplex orkit villa."
                            ></a>
                            <a
                              href="/images/listing/img_large_06.jpg"
                              className="d-block"
                              data-fancybox="revImg"
                              data-caption="Duplex orkit villa."
                            ></a>
                          </div>
                        </li>
                      </ul>
                      <div className="d-flex review-help-btn">
                        <a href="#" className="me-5">
                          <i className="fa-sharp fa-regular fa-thumbs-up"></i>{" "}
                          <span>Helpful</span>
                        </a>
                        <a href="#">
                          <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                          <span>Flag</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="review hide">
                    <img
                      src="/images/media/img_02.jpg"
                      alt=""
                      className="rounded-circle avatar"
                    />
                    <div className="text">
                      <div className="d-sm-flex justify-content-between">
                        <div>
                          <h6 className="name">Perty Jinta</h6>
                          <div className="time fs-16">17 Aug, 23</div>
                        </div>
                        <ul className="rating style-none d-flex xs-mt-10">
                          <li>
                            <span className="fst-italic me-2">
                              (4.7 Rating)
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p className="fs-20 mt-20 mb-30">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque sed
                        nulla facili diam posuere aliquam suscipit quam.
                      </p>
                      <div className="d-flex review-help-btn">
                        <a href="#" className="me-5">
                          <i className="fa-sharp fa-regular fa-thumbs-up"></i>{" "}
                          <span>Helpful</span>
                        </a>
                        <a href="#">
                          <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                          <span>Flag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="load-more-review text-uppercase w-100 inverse rounded-0 border-15 tran3s">
                  VIEW ALL 120 REVIEWS <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </div>

            <div className="review-form">
              <h4 className="mb-20">Leave A Reply</h4>
              <p className="fs-20 lh-lg pb-15">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="color-dark fw-500 text-decoration-underline"
                >
                  Sign in
                </a>{" "}
                to post your comment or signup if you don&lsquo;t have any
                account.
              </p>

              <div className="bg-dot p-30">
                <form action="#" className="bg-white p-40">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-box-two mb-30">
                        <div className="label">Title*</div>
                        <input
                          type="text"
                          placeholder="Rashed Kabir"
                          className="type-input rounded-0"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box-two mb-30">
                        <div className="label">Email*</div>
                        <input
                          type="email"
                          placeholder="rshdkabir@gmail.com"
                          className="type-input rounded-0"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box-two mb-30">
                        <div className="label">Ratings*</div>
                        <select className="nice-select rounded-0">
                          <option value="0">Ratings</option>
                          <option value="1">Five Star</option>
                          <option value="1">Four Star</option>
                          <option value="1">Three Star</option>
                          <option value="1">Two Star</option>
                          <option value="1">One Star</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-box-two mb-30">
                        <textarea
                          placeholder="Write your review here..."
                          className="rounded-0"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className="btn-five text-uppercase rounded-0 sm">
                    Post Review
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-8 me-auto ms-auto">
            <div className="theme-sidebar-one dot-bg p-30 ms-xl-3 lg-mt-80">
              <div className="agent-info bg-white p-30 mb-40">
                <img
                  src="/images/agent/img_06.jpg"
                  alt=""
                  className=" rounded-circle ms-auto me-auto mt-3 avatar"
                />
                <div className="text-center mt-25">
                  <h6 className="name">Rashed Kabir</h6>
                  <p className="fs-16">Property Agent & Broker</p>
                  <ul className="style-none d-flex align-items-center justify-content-center social-icon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="divider-line mt-40 mb-45 pt-20">
                  <ul className="style-none">
                    <li>
                      Location: <span>Spain, Barcelona</span>
                    </li>
                    <li>
                      Email:{" "}
                      <span>
                        <a href="mailto:akabirr770@gmail.com">
                          akabirr770@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      Phone:{" "}
                      <span>
                        <a href="tel:+12347687565">+12347687565</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="contact.html"
                  className="btn-nine text-uppercase w-100 mb-10"
                >
                  CONTACT AGENT
                </a>
              </div>

              <div className="tour-schedule bg-white p-30 mb-40">
                <h5 className="mb-40">Schedule Tour</h5>
                <form action="#">
                  <div className="input-box-three mb-25">
                    <div className="label">Your Name*</div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-25">
                    <div className="label">Your Email*</div>
                    <input
                      type="email"
                      placeholder="Enter mail address"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-25">
                    <div className="label">Your Phone*</div>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-15">
                    <div className="label">Message*</div>
                    <textarea
                      placeholder="Hello, I am interested in [Califronia Apartments]"
                      className="rounded-0"
                    ></textarea>
                  </div>
                  <button className="btn-nine text-uppercase w-100 mb-10">
                    INQUIry
                  </button>
                </form>
              </div>

              <div className="mortgage-calculator bg-white p-30 mb-40">
                <h5 className="mb-40">Mortgage Calculator</h5>
                <form action="#">
                  <div className="input-box-three mb-25">
                    <div className="label">Home Price*</div>
                    <input
                      type="tel"
                      placeholder="1,32,789"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-25">
                    <div className="label">Down Payment*</div>
                    <input
                      type="tel"
                      placeholder="₦"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-25">
                    <div className="label">Interest Rate*</div>
                    <input
                      type="tel"
                      placeholder="3.5%"
                      className="type-input rounded-0"
                    />
                  </div>
                  <div className="input-box-three mb-25">
                    <div className="label">Loan Terms (Years)</div>
                    <input
                      type="tel"
                      placeholder="24"
                      className="type-input rounded-0"
                    />
                  </div>
                  <button className="btn-five text-uppercase sm rounded-0 w-100 mb-10">
                    CALCULATE
                  </button>
                </form>
              </div>

              <div className="feature-listing bg-white p-30">
                <h5 className="mb-40">Featured Listing</h5>
                <div id="F-listing" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#F-listing"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#F-listing"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#F-listing"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="listing-card-one style-two">
                        <div className="img-gallery">
                          <div className="position-relative overflow-hidden">
                            <div className="tag bg-white text-dark fw-500">
                              FOR RENT
                            </div>
                            <a href="#" className="fav-btn tran3s">
                              <i className="fa-light fa-heart"></i>
                            </a>
                            <img
                              src="/images/listing/img_13.jpg"
                              className="w-100"
                              alt="..."
                            />
                            <div className="img-slider-btn">
                              03 <i className="fa-regular fa-image"></i>
                              <a
                                href="/images/listing/img_large_01.jpg"
                                className="d-block"
                                data-fancybox="imgA"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_02.jpg"
                                className="d-block"
                                data-fancybox="imgA"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_03.jpg"
                                className="d-block"
                                data-fancybox="imgA"
                                data-caption="Blueberry villa"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div className="property-info mt-15">
                          <div className="d-flex justify-content-between align-items-end">
                            <div>
                              <strong className="price fw-500 color-dark">
                                ₦1,23,710
                              </strong>
                              <div className="address m0 pt-5">
                                120 Elgin St. Celina, Delaware{" "}
                              </div>
                            </div>
                            <a
                              href="listing_details_01.html"
                              className="btn-four"
                            >
                              <i className="bi bi-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="listing-card-one style-two">
                        <div className="img-gallery">
                          <div className="position-relative overflow-hidden">
                            <div className="tag bg-white text-dark fw-500">
                              FOR RENT
                            </div>
                            <a href="#" className="fav-btn tran3s">
                              <i className="fa-light fa-heart"></i>
                            </a>
                            <img
                              src="/images/listing/img_14.jpg"
                              className="w-100"
                              alt="..."
                            />
                            <div className="img-slider-btn">
                              03 <i className="fa-regular fa-image"></i>
                              <a
                                href="/images/listing/img_large_04.jpg"
                                className="d-block"
                                data-fancybox="imgB"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_05.jpg"
                                className="d-block"
                                data-fancybox="imgB"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_06.jpg"
                                className="d-block"
                                data-fancybox="imgB"
                                data-caption="Blueberry villa"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div className="property-info mt-15">
                          <div className="d-flex justify-content-between align-items-end">
                            <div>
                              <strong className="price fw-500 color-dark">
                                ₦2,11,536
                              </strong>
                              <div className="address m0 pt-5">
                                120 Elgin St. Celina, Delaware{" "}
                              </div>
                            </div>
                            <a
                              href="listing_details_01.html"
                              className="btn-four"
                            >
                              <i className="bi bi-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="listing-card-one style-two">
                        <div className="img-gallery">
                          <div className="position-relative overflow-hidden">
                            <div className="tag bg-white text-dark fw-500">
                              FOR RENT
                            </div>
                            <a href="#" className="fav-btn tran3s">
                              <i className="fa-light fa-heart"></i>
                            </a>
                            <img
                              src="/images/listing/img_15.jpg"
                              className="w-100"
                              alt="..."
                            />
                            <div className="img-slider-btn">
                              03 <i className="fa-regular fa-image"></i>
                              <a
                                href="/images/listing/img_large_04.jpg"
                                className="d-block"
                                data-fancybox="imgC"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_05.jpg"
                                className="d-block"
                                data-fancybox="imgC"
                                data-caption="Blueberry villa"
                              ></a>
                              <a
                                href="/images/listing/img_large_06.jpg"
                                className="d-block"
                                data-fancybox="imgC"
                                data-caption="Blueberry villa"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div className="property-info mt-15">
                          <div className="d-flex justify-content-between align-items-end">
                            <div>
                              <strong className="price fw-500 color-dark">
                                ₦3,05,958
                              </strong>
                              <div className="address m0 pt-5">
                                120 Elgin St. Celina, Delaware{" "}
                              </div>
                            </div>
                            <a
                              href="listing_details_01.html"
                              className="btn-four"
                            >
                              <i className="bi bi-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
