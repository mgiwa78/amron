import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <a href="/" className="d-flex align-items-center">
                <img height="70" src="/images/logo/logo_012.png" alt="" />
              </a>
            </div>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                {/* <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn-one"
                  >
                    <i className="fa-regular fa-lock"></i> <span>Login</span>
                  </a>
                </li> */}
                <li className="d-none d-md-inline-block ms-3">
                  <Link
                    href="/admin/add-property"
                    className="btn-two"
                    target="_blank"
                  >
                    <span>Add Listing</span>
                    <i className="fa-thin fa-arrow-up-right"></i>
                  </Link>
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
                      <a href="/" className="d-block">
                        <img src="images/logo/logo_01.svg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " href="/" role="button">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" href="/admin" target="_blank">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" href="/properties">
                      Properties
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" href="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
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
