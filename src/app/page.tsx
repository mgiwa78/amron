import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="hero-banner-one bg-pink z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto">
              <h1 className="hero-heading text-center wow fadeInUp">
                Get the ideal home for your
                <span className="d-inline-block position-relative">
                  family
                  <img
                    src="/images/shape/shape_01.svg"
                    alt=""
                    className="lazy-img"
                  />
                </span>
              </h1>
              <p
                className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We’ve more than 745,000 apartments, place & plot.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-10 m-auto">
              <div className="search-wrapper-one layout-one bg position-relative">
                <div className="bg-wrapper">
                  <form action="https://html.creativegigstf.com/homy/homy/listing_01.html">
                    <div className="row gx-0 align-items-center">
                      <div className="col-xl-3 col-lg-4">
                        <div className="input-box-one border-left">
                          <div className="label">I’m looking to...</div>
                          <select className="nice-select">
                            <option value="1">Buy Apartments</option>
                            <option value="2">Rent Condos</option>
                            <option value="3">Sell Houses</option>
                            <option value="4">Rent Industrial</option>
                            <option value="6">Sell Villas</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="input-box-one border-left">
                          <div className="label">Location</div>
                          <select className="nice-select location">
                            <option value="1">Dhanmondi, Dhaka</option>
                            <option value="2">Acapulco, Mexico</option>
                            <option value="3">Berlin, Germany</option>
                            <option value="4">Cannes, France</option>
                            <option value="5">Delhi, India</option>
                            <option value="6">Giza, Egypt</option>
                            <option value="7">Havana, Cuba</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4">
                        <div className="input-box-one border-left border-lg-0">
                          <div className="label">Price Range</div>
                          <select className="nice-select">
                            <option value="1">$10,000 - $200,000</option>
                            <option value="2">$200,000 - $300,000</option>
                            <option value="2">$300,000 - $400,000</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-2">
                        <div className="input-box-one lg-mt-10">
                          <button className="fw-500 text-uppercase tran3s search-btn">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/assets/ils_01.svg"
          alt=""
          className="shapes w-100 illustration"
        />
      </div>

      <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
        <div className="main-content m-auto">
          <div className="feedback-slider-one position-static">
            <div className="item">
              <div className="feedback-block-one text-center">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src="/images/media/img_01.jpg"
                      alt=""
                      className="rounded-circle m-auto avatar"
                    />
                    <h6 className="fs-20 m0 pt-10">Jonathan Harry</h6>
                    <span className="fs-16">Milan, Itlay</span>
                  </div>
                  <div className="col-md-6">
                    <blockquote>
                      Efficient, knowledgeable, & made our home search a smooth
                      experience. Highly recommended agency!
                    </blockquote>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="/images/assets/rating_01.png"
                      alt=""
                      className="lazy-img m-auto"
                    />
                    <p className="text-center m0 pt-10">
                      <span className="fw-500 color-dark">13k rating</span> (4.7
                      Rating)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feedback-block-one text-center">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src="/images/media/img_02.jpg"
                      alt=""
                      className="rounded-circle m-auto avatar"
                    />
                    <h6 className="fs-20 m0 pt-10">Sofia Rena</h6>
                    <span className="fs-16">New York, USA</span>
                  </div>
                  <div className="col-md-6">
                    <blockquote>
                      People who are sentinels are definitely the working very
                      hard now, so that they can enjoy the fruits.
                    </blockquote>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="/images/assets/rating_01.png"
                      alt=""
                      className="lazy-img m-auto"
                    />
                    <p className="text-center m0 pt-10">
                      <span className="fw-500 color-dark">10k rating</span> (4.5
                      Rating)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feedback-block-one text-center">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src="/images/media/img_03.jpg"
                      alt=""
                      className="rounded-circle m-auto avatar"
                    />
                    <h6 className="fs-20 m0 pt-10">Rashed Kabir</h6>
                    <span className="fs-16">Dhaka, BD</span>
                  </div>
                  <div className="col-md-6">
                    <blockquote>
                      They are very strict about themselves and their work, and
                      do not have a carefree attitude to anything in life.
                    </blockquote>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="/images/assets/rating_01.png"
                      alt=""
                      className="lazy-img m-auto"
                    />
                    <p className="text-center m0 pt-10">
                      <span className="fw-500 color-dark">11k rating</span> (4.8
                      Rating)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-one mt-150 xl-mt-120">
        <div className="container">
          <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3>
              Unlock Homys
              <span>
                advantages
                <img
                  src="/images/shape/title_shape_01.svg"
                  alt=""
                  className="lazy-img"
                />
              </span>
            </h3>
            <p className="fs-24">
              Your trusted real estate partner in every transaction.
            </p>
          </div>

          <div className="row gx-xl-5">
            <div className="col-md-4">
              <div className="card-style-one text-center wow fadeInUp mt-40">
                <img
                  src="/images/icon/icon_01.svg"
                  alt=""
                  className="lazy-img m-auto icon"
                />
                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
                  Buy a home
                </div>
                <p className="fs-24 ps-xxl-4 pe-xxl-4">
                  Explore homy’s 2 million+ homes and uncover your ideal living
                  space.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card-style-one text-center wow fadeInUp mt-40"
                data-wow-delay="0.1s"
              >
                <img
                  src="/images/icon/icon_02.svg"
                  alt=""
                  className="lazy-img m-auto icon"
                />
                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
                  Rent a home
                </div>
                <p className="fs-24 ps-xxl-3 pe-xxl-3">
                  Discover a rental youll love on homy, thanks to 35+ filters
                  and tailored keywords.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card-style-one text-center wow fadeInUp mt-40"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/icon/icon_03.svg"
                  alt=""
                  className="lazy-img m-auto icon"
                />
                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
                  Sell property
                </div>
                <p className="fs-24 ps-xxl-4 pe-xxl-4">
                  List, sell, thrive – with our top-notch real estate agency.
                  It’s super easy & fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-two mt-150 xl-mt-110">
        <div className="wrapper">
          <div className="row gx-xl-5">
            <div className="col-xxl-7 col-md-6 d-flex wow fadeInLeft">
              <div className="block-one w-100 h-100">
                <div className="position-relative z-1 h-100">
                  <h3 className="mb-55">Secure your familys dream home.</h3>
                  <a
                    className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle ms-3"
                    data-fancybox=""
                    href="https://www.youtube.com/embed/aXFSJTjVjw0"
                    tabIndex={-1}
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <div className="card-box text-center">
                    <h3 className="main-count fw-500">
                      0<span className="counter">7</span>+
                    </h3>
                    <p className="fs-20">
                      Years Experience <br />
                      with proud.
                    </p>
                  </div>
                  <img
                    src="/images/assets/screen_01.png"
                    alt=""
                    className="lazy-img shapes screen_01"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-md-6 wow fadeInRight">
              <div className="block-two">
                <div className="bg-wrapper">
                  <h4>Who we are?</h4>
                  <p className="fs-22 mt-20">
                    Your premier partner in real estate. <br />
                    Transforming properties into dreams. Let us guide you home
                    with expertise.
                  </p>
                  <div className="counter-wrapper ps-xl-3 pb-30 mt-45 mb-50">
                    <div className="row">
                      <div className="col-6">
                        <div className="counter-block-one mt-20">
                          <div className="main-count fw-500 color-dark">
                            <span className="counter">1.7</span>K+
                          </div>
                          <span>Completed Project</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="counter-block-one mt-20">
                          <div className="main-count fw-500 color-dark">
                            <span className="counter">1.3</span>mil+
                          </div>
                          <span>Happy Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-style-one fs-22 color-dark style-none">
                    <li>Loan & low Interest facility</li>
                    <li>Over 100k+ property & update regularly</li>
                    <li>Expert agent consultation</li>
                  </ul>
                  <div className="d-inline-flex flex-wrap align-items-center mt-15 md-mt-10">
                    <a href="about_us_01.html" className="btn-two mt-20 me-4">
                      <span>More Details</span>
                    </a>
                    <a href="contact.html" className="btn-three mt-20">
                      <span>Request a Callback</span>
                      <i className="fa-light fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-three mt-150 xl-mt-120">
        <div className="container">
          <div className="position-relative z-1">
            <div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
              <h3>
                Explore Popular
                <span>
                  Location
                  <img
                    src="/images/shape/title_shape_02.svg"
                    alt=""
                    className="lazy-img"
                  />
                </span>
              </h3>
              <p className="fs-22">
                Explore the latest listings & projects in diverse areas
              </p>
            </div>

            <div className="property-location-slider-one">
              <div className="item">
                <div
                  className="location-card-one position-relative z-1 d-flex align-items-end"
                  style={{ backgroundImage: "url(/images/media/img_05.jpg)" }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white fw-normal">Kelowna</h5>
                    <p className="text-white fw-light">1,230 Properties</p>
                  </div>
                  <a href="listing_01.html" className="stretched-link"></a>
                </div>
              </div>
              <div className="item">
                <div
                  className="location-card-one position-relative z-1 d-flex align-items-end"
                  style={{ backgroundImage: "url(/images/media/img_06.jpg)" }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white fw-normal">California</h5>
                    <p className="text-white fw-light">1,190 Properties</p>
                  </div>
                  <a href="listing_01.html" className="stretched-link"></a>
                </div>
              </div>
              <div className="item">
                <div
                  className="location-card-one position-relative z-1 d-flex align-items-end"
                  style={{ backgroundImage: "url(/images/media/img_07.jpg)" }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white fw-normal">New York</h5>
                    <p className="text-white fw-light">1,710 Properties</p>
                  </div>
                  <a href="listing_01.html" className="stretched-link"></a>
                </div>
              </div>
              <div className="item">
                <div
                  className="location-card-one position-relative z-1 d-flex align-items-end"
                  style={{ backgroundImage: "url(/images/media/img_08.jpg)" }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white fw-normal">Miami</h5>
                    <p className="text-white fw-light">670 Properties</p>
                  </div>
                  <a href="listing_01.html" className="stretched-link"></a>
                </div>
              </div>
              <div className="item">
                <div
                  className="location-card-one position-relative z-1 d-flex align-items-end"
                  style={{ backgroundImage: "url(/images/media/img_09.jpg)" }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white fw-normal">Dhaka</h5>
                    <p className="text-white fw-light">1,670 Properties</p>
                  </div>
                  <a href="listing_01.html" className="stretched-link"></a>
                </div>
              </div>
            </div>
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none">
              <li className="prev_a slick-arrow">
                <i className="fa-sharp fa-light fa-angle-left"></i>
              </li>
              <li className="next_a slick-arrow">
                <i className="fa-sharp fa-light fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
              <h3>
                New
                <span>
                  Listings
                  <img
                    src="/images/shape/title_shape_03.svg"
                    alt=""
                    className="lazy-img"
                  />
                </span>
              </h3>
              <p className="fs-22 mt-xs">
                Explore latest & featured properties for sale.
              </p>
            </div>

            <div className="row gx-xxl-5">
              <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25">FOR RENT</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      Blueberry villa
                    </a>
                    <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1370 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">03 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280/<sub>m</sub>
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag sale border-25">FOR SELL</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_02.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_03.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      White House villa
                    </a>
                    <div className="address">Muza link road, ca, usa</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1270 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $28,100.00
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag sale border-25">FOR SELL</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_03.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_02.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      Luxury villa in Dal lake.
                    </a>
                    <div className="address">Mirpur 10, Stadium</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1270 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $42,500.00
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25">FOR RENT</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_04.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_02.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      Blueberry villa
                    </a>
                    <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1370 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">03 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280/<sub>m</sub>
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag sale border-25">FOR SELL</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_05.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_03.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      White House villa
                    </a>
                    <div className="address">Muza link road, ca, usa</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1270 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $28,100.00
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25">FOR RENT</div>
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
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_06.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_04.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="1000000"
                          >
                            <a
                              href="listing_details_01.html"
                              className="d-block"
                            >
                              <img
                                src="/images/listing/img_01.jpg"
                                className="w-100"
                                alt="..."
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href="listing_details_01.html" className="title tran3s">
                      Luxury villa in Dal lake.
                    </a>
                    <div className="address">Mirpur 10, Stadium</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_04.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">1270 sqft</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_05.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bed</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/images/icon/icon_06.svg"
                          alt=""
                          className="lazy-img icon me-2"
                        />
                        <span className="fs-16">02 bath</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280/<sub>m</sub>
                      </strong>
                      <a
                        href="listing_details_01.html"
                        className="btn-four rounded-circle"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-btn text-center md-mt-60">
              <a href="listing_01.html" className="btn-five">
                Explore All
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="title-one mb-45 lg-mb-30">
                <h3 className="text-white">
                  Exclusive
                  <span>
                    Monthly
                    <img
                      src="/images/shape/title_shape_04.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </span>
                  Deal for you.
                </h3>
                <p className="fs-24 text-white pe-xl-5 me-xxl-5">
                  Dont miss out on this personalized monthly exclusive offer for
                  you.
                </p>
              </div>
              <a href="listing_details_02.html" className="btn-six">
                More Details
              </a>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="property-item md-mt-60 position-relative z-1">
                <div className="row gx-0">
                  <div className="col-md-5 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20">FOR SELL</div>
                      <h4 className="mb-70 sm-mb-40">
                        Luxury fisa orkit villa.
                      </h4>
                      <ul className="style-none d-flex action-icons">
                        <li>
                          <a href="#">
                            <i className="fa-light fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-light fa-bookmark"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-light fa-circle-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex">
                    <div className="gutter w-100 h-100">
                      <p>Mirpur 10, National Stadium, 1210, Dhaka, BD</p>
                      <h2 className="price text-center">$28,100.00</h2>
                      <ul className="style-none d-flex feature">
                        <li>
                          <strong className="d-block color-dark fw-500 fs-20">
                            2137
                          </strong>
                          <span className="fs-16">sqft</span>
                        </li>
                        <li className="text-center">
                          <strong className="d-block color-dark fw-500 fs-20">
                            03
                          </strong>
                          <span className="fs-16">bed</span>
                        </li>
                        <li className="text-end">
                          <strong className="d-block color-dark fw-500 fs-20">
                            02
                          </strong>
                          <span className="fs-16">bath</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="button-group gutter d-flex justify-content-between align-items-center">
                  <a href="listing_details_02.html" className="btn-three">
                    <span>Check Full Details</span>
                  </a>
                  <a
                    href="listing_details_02.html"
                    className="btn-four rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="agent-section-one position-relative z-1 mt-150 xl-mt-120">
        <div className="container">
          <div className="position-relative">
            <div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
              <h3>
                Our
                <span>
                  Agents
                  <img
                    src="/images/shape/title_shape_05.svg"
                    alt=""
                    className="lazy-img"
                  />
                </span>
              </h3>
              <p className="fs-22 mt-xs">
                Lorem is placeholder text commonly used graphic
              </p>
            </div>

            <div className="wrapper position-relative z-1">
              <div className="agent-slider-one">
                <div className="item">
                  <div className="agent-card-one position-relative">
                    <div className="img border-20">
                      <img
                        src="/images/agent/img_01.jpg"
                        alt=""
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>Mark Filo</h6>
                      <a href="agent_details.html" className="stretched-link">
                        CEO & Founder
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="agent-card-one position-relative">
                    <div className="img border-20">
                      <img
                        src="/images/agent/img_02.jpg"
                        alt=""
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>Chris Matial</h6>
                      <a href="agent_details.html" className="stretched-link">
                        Retailer
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="agent-card-one position-relative">
                    <div className="img border-20">
                      <img
                        src="/images/agent/img_03.jpg"
                        alt=""
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>Jubayer Al Hasan</h6>
                      <a href="agent_details.html" className="stretched-link">
                        Marketing Expert
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="agent-card-one position-relative">
                    <div className="img border-20">
                      <img
                        src="/images/agent/img_04.jpg"
                        alt=""
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>Jannatul Ferdaus</h6>
                      <a href="agent_details.html" className="stretched-link">
                        Broker
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="agent-card-one position-relative">
                    <div className="img border-20">
                      <img
                        src="/images/agent/img_05.jpg"
                        alt=""
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>Chris Matial</h6>
                      <a href="agent_details.html" className="stretched-link">
                        Broker
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-btn text-center md-mt-60">
              <a href="agent.html" className="btn-one fw-normal">
                Meet Entire Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex order-lg-last">
              <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
                <div className="title-one mb-60 lg-mb-40">
                  <div className="upper-title">CB ESTIMATE</div>
                  <h3>
                    Get quick
                    <span>
                      estimate
                      <img
                        src="/images/shape/title_shape_06.svg"
                        alt=""
                        className="lazy-img"
                      />
                    </span>
                    on your home.
                  </h3>
                  <p className="fs-24 color-dark">
                    Master your propertys valuation for a poised entry into the
                    real estate market, armed with self-assurance and insight.
                  </p>
                </div>
                <form action="#" className="me-xl-4">
                  <input type="email" placeholder="Your Email Address..." />
                  <button>Find out</button>
                </form>
                <div className="fs-16 mt-10 opacity-75">
                  *For accurate info please
                  <a
                    href="contact.html"
                    className="fst-italic color-dark text-decoration-underline"
                  >
                    contact us.
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                <div
                  className="img-bg"
                  style={{ backgroundImage: "url(/images/media/img_11.jpg)" }}
                ></div>
                <div className="card-one">
                  <div className="text text-center z-1">
                    <h6>Your estimate is in!</h6>
                    <h3>$378,30.00</h3>
                  </div>
                  <img
                    src="/images/assets/screen_12.png"
                    alt=""
                    className="lazy-img w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-five position-relative z-1 bg-pink pt-100 lg-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-225 xl-mt-200 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="title-one text-center mb-35 lg-mb-20">
                <h3>
                  We’r here to help <br />
                  you get your
                  <span>
                    dream home
                    <img
                      src="/images/shape/title_shape_07.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </span>
                </h3>
                <p className="fs-24 color-dark">
                  It’s easy to start with us with these simple steps
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xxl-11 m-auto">
              <div className="row gx-xl-5 justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="card-style-one text-center wow fadeInUp mt-40">
                    <img
                      src="/images/icon/icon_07.svg"
                      alt=""
                      className="lazy-img m-auto icon"
                    />
                    <h5 className="mt-50 lg-mt-30 mb-15">Create Account</h5>
                    <p className="pe-xxl-4 ps-xxl-4">
                      It’s very easy to open an account and start your journey.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="card-style-one text-center wow fadeInUp mt-40 arrow position-relative"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="/images/icon/icon_08.svg"
                      alt=""
                      className="lazy-img m-auto icon"
                    />
                    <h5 className="mt-50 lg-mt-30 mb-15">Find Home</h5>
                    <p className="pe-xxl-4 ps-xxl-4">
                      Complete your profile with all the info to get attention
                      of client.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="card-style-one text-center wow fadeInUp mt-40"
                    data-wow-delay="0.2s"
                  >
                    <img
                      src="/images/icon/icon_09.svg"
                      alt=""
                      className="lazy-img m-auto icon"
                    />
                    <h5 className="mt-50 lg-mt-30 mb-15">Quick Process</h5>
                    <p className="pe-xxl-4 ps-xxl-4">
                      Apply & get your preferable jobs with all the requirements
                      and get it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_07.svg"
          alt=""
          className="lazy-img shapes shape_01"
        />
        <img
          src="/images/shape/shape_08.svg"
          alt=""
          className="lazy-img shapes shape_02"
        />
      </div>

      <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
                <h3 className="text-white m0">
                  Start your
                  <span>
                    Journey
                    <img
                      src="/images/shape/title_shape_06.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </span>
                  As a Retailer.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-wrapper me-auto ms-auto me-lg-0">
                <form action="#">
                  <input type="email" placeholder="Email address" />
                  <button>Get Started</button>
                </form>
                <div className="fs-16 mt-10 text-white">
                  Already a Agent?
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Sign in.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-8 m-auto">
              <div className="title-one mb-45 md-mb-30">
                <h2>
                  Any Inquiry?
                  <span>
                    Feel free
                    <img
                      src="/images/shape/title_shape_08.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </span>
                  To contact Us.
                </h2>
              </div>
              <a href="contact.html" className="btn-five text-uppercase">
                SEND MESSAGE
              </a>
            </div>
          </div>
        </div>
        <img
          src="/images/assets/ils_02.svg"
          alt=""
          className="lazy-img shapes w-100 illustration"
        />
      </div>
    </>
  );
}
