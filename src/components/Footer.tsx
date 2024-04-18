import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-one">
      <div className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="footer-intro">
                <div className="bg-wrapper">
                  <div className="logo mb-20">
                    <a href="index.html">
                      <img src="images/logo/logo_01.svg" alt="" />
                    </a>
                  </div>
                  <p className="mb-60 lg-mb-40 md-mb-20">
                    11910 Clyde Rapid Suite 70, Willyand, Virginia, United
                    States
                  </p>
                  <h6>CONTACT</h6>
                  <a
                    href="#"
                    className="email fs-24 text-decoration-underline tran3s mb-70 lg-mb-50"
                  >
                    homyreal@demo.com
                  </a>
                  <ul className="style-none d-flex align-items-center social-icon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-square-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-wrap">
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-50">
                  <h5 className="footer-title">Links</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/properties">Properties</Link>
                    </li>
                    <li>
                      <Link href="/about">About Amron</Link>
                    </li>
                    <li>
                      <Link href="/projects">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/dashboard" target="_blank">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-30">
                  <h5 className="footer-title">Legal</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/faqs">Faqs</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-30">
                  <h5 className="footer-title">Admin</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/admin/properties">Properties</Link>
                    </li>
                    <li>
                      <Link href="/admin/add-property">Add Property</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
