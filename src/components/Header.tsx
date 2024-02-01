import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
      <div className="alert-wrapper text-center">
        <p className="fs-16 m0 text-white">
          The{" "}
          <a href="listing_01.html" className="fw-500">
            flash sale
          </a>{" "}
          go on. The offer will end in — <span>This Sunday</span>
        </p>
      </div>
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <a href="index.html" className="d-flex align-items-center">
                <img height="70" src="images/logo/logo_012.png" alt="" />
              </a>
            </div>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn-one"
                  >
                    <i className="fa-regular fa-lock"></i> <span>Login</span>
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-3">
                  <a
                    href="dashboard/add-property.html"
                    className="btn-two"
                    target="_blank"
                  >
                    <span>Add Listing</span>
                    <i className="fa-thin fa-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <a href="index.html" className="d-block">
                        <img src="images/logo/logo_01.svg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dashboard-menu">
                    <a
                      className="nav-link"
                      href="dashboard/dashboard-index.html"
                      target="_blank"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html" className="dropdown-item">
                          <span>Home 01</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html" className="dropdown-item">
                          <span>Home 02</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-3.html" className="dropdown-item">
                          <span>Home 03</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-4.html" className="dropdown-item">
                          <span>Home 04</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-5.html" className="dropdown-item">
                          <span>Home 05</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-6.html" className="dropdown-item">
                          <span>Home 06</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-7.html" className="dropdown-item">
                          <span>Home 07</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-sm">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Listing
                    </a>
                    <ul className="dropdown-menu">
                      <li className="row gx-1">
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Listing Type</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="listing_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Sidebar-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_05.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Sidebar-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_02.html"
                                  className="dropdown-item"
                                >
                                  <span>List Sidebar-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_06.html"
                                  className="dropdown-item"
                                >
                                  <span>List Sidebar-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_03.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Top Filter-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_07.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Top Filter-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_04.html"
                                  className="dropdown-item"
                                >
                                  <span>List Top Filter-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_08.html"
                                  className="dropdown-item"
                                >
                                  <span>List Top Filter-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_09.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Banner Filter-1</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Listing Type</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="listing_11.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Banner Filter-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_10.html"
                                  className="dropdown-item"
                                >
                                  <span>List Banner Filter-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_12.html"
                                  className="dropdown-item"
                                >
                                  <span>List Banner Filter-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_13.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Fullwidth</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_14.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Fullwidth Map-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_16.html"
                                  className="dropdown-item"
                                >
                                  <span>Grid Fullwidth Map-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_15.html"
                                  className="dropdown-item"
                                >
                                  <span>List Fullwidth Map-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_17.html"
                                  className="dropdown-item"
                                >
                                  <span>List Fullwidth Map-2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Single Listing</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="listing_details_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_details_02.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_details_03.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-3</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_details_04.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-4</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_details_05.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-5</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="listing_details_06.html"
                                  className="dropdown-item"
                                >
                                  <span>Listing Details-6</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-sm">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="row gx-1">
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Essential</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="about_us_01.html"
                                  className="dropdown-item"
                                >
                                  <span>About us -1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="about_us_02.html"
                                  className="dropdown-item"
                                >
                                  <span>About us -2</span>
                                </a>
                              </li>
                              <li>
                                <a href="agency.html" className="dropdown-item">
                                  <span>Agency</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="agency_details.html"
                                  className="dropdown-item"
                                >
                                  <span>Agency Details</span>
                                </a>
                              </li>
                              <li>
                                <a href="agent.html" className="dropdown-item">
                                  <span>Agent</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="agent_details.html"
                                  className="dropdown-item"
                                >
                                  <span>Agent Details</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Features</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="project_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Project -1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="project_02.html"
                                  className="dropdown-item"
                                >
                                  <span>Project -2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="project_03.html"
                                  className="dropdown-item"
                                >
                                  <span>Project -3</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="project_04.html"
                                  className="dropdown-item"
                                >
                                  <span>Project -4</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="project_details_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Project Details</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="service_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Services -1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="service_02.html"
                                  className="dropdown-item"
                                >
                                  <span>Services -2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="service_details.html"
                                  className="dropdown-item"
                                >
                                  <span>Service Details</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Others</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <a
                                  href="compare.html"
                                  className="dropdown-item"
                                >
                                  <span>Property Compare</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="pricing_01.html"
                                  className="dropdown-item"
                                >
                                  <span>Pricing -1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="pricing_02.html"
                                  className="dropdown-item"
                                >
                                  <span>Pricing -2</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="contact.html"
                                  className="dropdown-item"
                                >
                                  <span>Contact Us</span>
                                </a>
                              </li>
                              <li>
                                <a href="faq.html" className="dropdown-item">
                                  <span>FAQs</span>
                                </a>
                              </li>
                              <li>
                                <a href="404.html" className="dropdown-item">
                                  <span>404-Error</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog_01.html" className="dropdown-item">
                          <span>Blog Grid</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_02.html" className="dropdown-item">
                          <span>Blog List</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_03.html" className="dropdown-item">
                          <span>Blog 2 column</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_details.html" className="dropdown-item">
                          <span>Blog Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="d-md-none ps-2 pe-2 mt-20">
                    <a
                      href="dashboard/add-property.html"
                      className="btn-two w-100"
                      target="_blank"
                    >
                      <span>Add Listing</span>
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
