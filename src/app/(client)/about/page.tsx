import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
        <div className="container">
          <h3 className="mb-35 xl-mb-20 pt-15">About Amron</h3>
          <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li> About us</li>
          </ul>
        </div>
        <img
          src="/images/assets/ils_07.svg"
          alt=""
          className=" shapes w-100 illustration"
        />
      </div>

      <div className="block-feature-two mt-150 xl-mt-100">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="me-xxl-4">
                <div className="title-one mb-60 lg-mb-40">
                  <div className="upper-title">About usE</div>
                  <h3>
                    Secure your
                    <span>
                      family&lsquo;s
                      <img
                        src="/images/shape/title_shape_06.svg"
                        alt=""
                        className=""
                      />
                    </span>
                    Dream home.
                  </h3>
                  <p className="fs-22">
                    Our founders Dustin Moskovitz and Justin Rosenstein met
                    while leading Engineering .
                  </p>
                </div>
                <a href="contact.html" className="btn-two">
                  Contact Us
                </a>
                <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                  <div className="row">
                    <div className="col-xxl-6 col-sm-5">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-500 color-dark">
                          <span className="counter">1.2</span>%
                        </div>
                        <span>Low interest rate</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-7">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-500 color-dark">
                          ₦<span className="counter">1.3</span>b+
                        </div>
                        <span>Cumulative trading volume</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="block-two md-mt-40">
                <div className="bg-wrapper">
                  <h5>Who we are?</h5>
                  <p className="fs-22 lh-lg mt-20">
                    Our founders Dustin Moskovitz & Justin Rosenstein met
                    leading Engineering teams at Facebook. As operations scaled,
                    they grew frustrated by how difficult coordinate
                  </p>
                  <h5 className="top-line">Our Mission </h5>
                  <p className="fs-22 lh-lg mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt ut labore et dolore aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-banner-one mt-150 xl-mt-120 md-mt-80">
        <div className="container">
          <div
            className="bg-wrapper position-relative z-1 overflow-hidden d-flex align-items-center justify-content-center"
            style={{ backgroundImage: "url(images/media/img_50.jpg)" }}
          >
            <a
              className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle tran3s"
              data-fancybox=""
              href="https://www.youtube.com/embed/aXFSJTjVjw0"
              tabIndex={-1}
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="block-feature-five position-relative z-1 pt-170 xl-pt-120 pb-130 xl-pb-100 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="title-one text-center mb-35 lg-mb-20">
                <h3>
                  We’r here to help <br /> you get your
                  <span>
                    dream home
                    <img
                      src="/images/shape/title_shape_07.svg"
                      alt=""
                      className=""
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
                      className=" m-auto icon"
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
                      className=" m-auto icon"
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
                      className=" m-auto icon"
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
          className=" shapes shape_01"
        />
        <img
          src="/images/shape/shape_08.svg"
          alt=""
          className=" shapes shape_02"
        />
      </div>

      <div className="feedback-section-six bg-pink-two position-relative z-1 pt-110 xl-pt-80 pb-100 xl-pb-80">
        <div className="container">
          <div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
            <h3>Client Feedback</h3>
            <p className="fs-20 mt-xs">
              Client satisfaction speaks louder than our words. Hear from them.
            </p>
          </div>
          <div className="feedback-slider-three">
            <div className="item">
              <div className="feedback-block-six rounded-4">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="rating style-none d-flex">
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
                  <img src="/images/icon/icon_29.svg" alt="" className="icon" />
                </div>
                <blockquote>
                  Game-changer! Boosted efficiency, simplified tasks, and saved
                  time. Highly recommended!
                </blockquote>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fs-20 m0">
                    Rashed Kabir,
                    <span className="fw-normal opacity-50">Claifornia</span>
                  </h6>
                  <img
                    src="/images/media/img_01.jpg"
                    alt=""
                    className="rounded-circle avatar"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feedback-block-six rounded-4">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="rating style-none d-flex">
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
                  <img src="/images/icon/icon_29.svg" alt="" className="icon" />
                </div>
                <blockquote>
                  Found our dream home. Great Business with them. simplified
                  tasks, and saved time. Thank You
                </blockquote>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fs-20 m0">
                    Jannat Ferdu,
                    <span className="fw-normal opacity-50">Claifornia</span>
                  </h6>
                  <img
                    src="/images/media/img_02.jpg"
                    alt=""
                    className="rounded-circle avatar"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feedback-block-six rounded-4">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="rating style-none d-flex">
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
                  <img src="/images/icon/icon_29.svg" alt="" className="icon" />
                </div>
                <blockquote>
                  Efficient and friendly service, guided us perfectly. Satisfied
                  with our new home. Thank you!
                </blockquote>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fs-20 m0">
                    Jubayer Hasan,
                    <span className="fw-normal opacity-50">Claifornia</span>
                  </h6>
                  <img
                    src="/images/media/img_03.jpg"
                    alt=""
                    className="rounded-circle avatar"
                  />
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
                    className=""
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
              <a href="agent.html" className="btn-five">
                Meet Entire Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-section-one mt-150 xl-mt-120 lg-mt-100 mb-130 xl-mb-100 lg-mb-60">
        <div className="container">
          <h6 className="text-center fs-20 mb-50 lg-mb-20">
            100+ Company trusted by us.
          </h6>
        </div>
        <div className="bg-wrapper bg-white">
          <div className="container">
            <div className="partner-logo-one">
              <div className="item">
                <img src="/images/logo/p_logo_07.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_08.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_09.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_10.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_11.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_12.png" alt="" />
              </div>
              <div className="item">
                <img src="/images/logo/p_logo_09.png" alt="" />
              </div>
            </div>
          </div>
        </div>
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
                      className=""
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
    </>
  );
};

export default About;
