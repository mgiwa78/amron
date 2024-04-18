import Link from "next/link";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
        <div className="container">
          <h3 className="mb-35 xl-mb-20 pt-15">Projects </h3>
          <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li> Projects</li>
          </ul>
        </div>
        <img
          src="/images/assets/ils_07.svg"
          alt=""
          className=" shapes w-100 illustration"
        />
      </div>

      <div className="project-section-one mt-150 xl-mt-100">
        <div className="container">
          <div className="filter-nav-one style-two">
            <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
              <li className="is-checked rounded-0" data-filter="*">
                All
              </li>
              <li className="rounded-0" data-filter=".apartments">
                Apartments
              </li>
              <li className="rounded-0" data-filter=".house">
                House
              </li>
              <li className="rounded-0" data-filter=".villa">
                VILLA
              </li>
              <li className="rounded-0" data-filter=".flat">
                FLAT
              </li>
            </ul>
          </div>

          <div id="isotop-gallery-wrapper" className="grid-2column pt-10 row">
            <div className="isotop-item house flat ">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">VILLA</div>
                  <a
                    href="/images/project/img_16.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="Blue Duplex Villa"
                  >
                    <img
                      src="/images/project/img_16.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">Blue Duplex Villa</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="isotop-item villa ">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">FLAT</div>
                  <a
                    href="/images/project/img_17.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="1320sft Modern Flat"
                  >
                    <img
                      src="/images/project/img_17.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">1320sft Modern Flat</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="isotop-item apartments">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">APARTMENTS</div>
                  <a
                    href="/images/project/img_18.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="Galaxy Sky Touch"
                  >
                    <img
                      src="/images/project/img_18.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">Galaxy Sky Touch</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="isotop-item villa">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">HOUSE</div>
                  <a
                    href="/images/project/img_19.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="Apartments Vintage City"
                  >
                    <img
                      src="/images/project/img_19.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">Apartments Vintage City</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="isotop-item house">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">FLAT</div>
                  <a
                    href="/images/project/img_20.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="2-Stored House"
                  >
                    <img
                      src="/images/project/img_20.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">2-Stored House</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="isotop-item apartments flat">
              <div className="project-block-two mt-80 lg-mt-40">
                <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                  <div className="tag fw-500 text-uppercase">VILLA</div>
                  <a
                    href="/images/project/img_21.jpg"
                    className="d-block position-relative"
                    data-fancybox
                    data-caption="Swimming Pool Villa"
                  >
                    <img
                      src="/images/project/img_21.jpg"
                      alt=""
                      className="w-100 tran5s"
                    />
                  </a>
                </figure>
                <div className="caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">
                      <div className="date position-relative">13 Sep, 22</div>
                      <Link href="/projects/project_details">
                        <h4 className="tran3s">Swimming Pool Villa</h4>
                      </Link>
                    </div>
                    <a
                      href="/projects/project_details"
                      className="btn-thirteen rounded-circle"
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

      <div className="fancy-banner-three position-relative text-center z-1 pt-140 xl-pt-100 md-pt-80 pb-150 xl-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-8 m-auto">
              <div className="title-one mb-45 md-mb-30">
                <h2>
                  Any Inquiry?{" "}
                  <span>
                    Feel free
                    <img
                      src="/images/shape/title_shape_08.svg"
                      alt=""
                      className=""
                    />
                  </span>{" "}
                  To contact Us.
                </h2>
              </div>
              <a href="contact.html" className="btn-five text-uppercase">
                SEND MESSAGE
              </a>
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
                  Start your{" "}
                  <span>
                    Journey
                    <img
                      src="/images/shape/title_shape_06.svg"
                      alt=""
                      className=""
                    />
                  </span>{" "}
                  As a Retailer.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-wrapper me-auto ms-auto me-lg-0">
                <form action="#">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="rounded-0"
                  />
                  <button className="rounded-0">Get Started</button>
                </form>
                <div className="fs-16 mt-10 text-white">
                  Already a Agent?{" "}
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

export default Projects;
