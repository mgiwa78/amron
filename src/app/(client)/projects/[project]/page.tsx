import React from "react";

type Props = {};

const ViewProject = (props: Props) => {
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

      <div className="project-details-one mt-150 xl-mt-100 mb-170 xl-mb-100">
        <div className="container">
          <div className="row gx-xxl-5">
            <div className="col-lg-6 order-lg-first">
              <figure className="image-wrapper">
                <img
                  src="/images/project/img_27.jpg"
                  alt=""
                  className=" w-100"
                />
              </figure>
              <figure className="image-wrapper">
                <img
                  src="/images/project/img_29.jpg"
                  alt=""
                  className=" w-100"
                />
              </figure>
              <figure className="image-wrapper">
                <img
                  src="/images/project/img_30.jpg"
                  alt=""
                  className=" w-100"
                />
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="details-text ps-xxl-5 md-mt-40">
                <div className="tag fw-500 text-uppercase">Apartments</div>
                <h3>Apartments on Vintage City.</h3>
                <p className="fs-24 pt-45 xl-pt-30 pb-45 xl-pb-30">
                  Your leading real estate advocate, transforming houses into
                  dreams. Trust{" "}
                </p>
                <h4 className="mb-40">Project Details</h4>
                <div className="project-info-outline">
                  <div className="main-bg">
                    <ul className="style-none">
                      <li className="position-relative z-1">
                        <div className="num fw-light">01</div>
                        <img
                          src="/images/icon/icon_43.svg"
                          alt=""
                          className=" icon"
                        />
                        <strong>Date</strong>
                        <span>Sunday, 23 July, 2021</span>
                      </li>
                      <li className="position-relative z-1">
                        <div className="num fw-light">02</div>
                        <img
                          src="/images/icon/icon_44.svg"
                          alt=""
                          className=" icon"
                        />
                        <strong>Client Name</strong>
                        <span>Mariona Adisson, California</span>
                      </li>
                      <li className="position-relative z-1">
                        <div className="num fw-light">03</div>
                        <img
                          src="/images/icon/icon_45.svg"
                          alt=""
                          className=" icon"
                        />
                        <strong>Project Type</strong>
                        <span>Business Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="fs-20 pt-50 pb-35">
                  Your leading real estate advocate, transforming houses into
                  dreams. Trust us to expertly guide you home. 745,000
                  apartments & home for sell, rent & mortgage.
                </p>
                <ul className="style-none d-flex align-items-center social-icon">
                  <li>Share :</li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>

                <div className="page-pagination mt-45 pt-50">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center page-title position-relative">
                      <img
                        src="/images/project/img_28.jpg"
                        alt=""
                        className=" img"
                      />
                      <div className="ps-4">
                        <span>Next PROJECT</span>
                        <h5 className="m0">1,320 sqft Modern Flat</h5>
                      </div>
                    </div>
                    <a href="#" className="btn-four rounded-circle inverse">
                      <i className="bi bi-arrow-right"></i>
                    </a>
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

export default ViewProject;
