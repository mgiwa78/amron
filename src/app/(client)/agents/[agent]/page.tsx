import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div
        className="inner-banner-two inner-banner z-1 pt-170 xl-pt-150 md-pt-130 pb-140 xl-pb-100 md-pb-80 position-relative"
        style={{ backgroundImage: "url(/images/media/img_49.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mb-45 xl-mb-30 md-mb-20">Agency Details</h3>
              <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>/</li>
                <li>
                  <a href="agency.html">Agency</a>
                </li>
                <li>/</li>
                <li>Rainbow Housing</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <p className="sub-heading">
                Over 745,000 listings, apartments, lots and plots available now!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="agency-details theme-details-one mt-130 xl-mt-100 pb-150 xl-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="info-pack-one p-20 mb-80 xl-mb-50">
                <div className="row">
                  <div className="col-xl-6 d-flex">
                    <div className="media p-20 d-flex align-items-center justify-content-center bg-white position-relative z-1 w-100 me-xl-4">
                      <div className="tag top-0 bg-dark text-white position-absolute text-uppercase">
                        27 Listing
                      </div>
                      <img src="/images/logo/p_logo_22.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="ps-xxl-3 pe-xxl-3 pt-40 lg-pt-30 pb-45 lg-pb-10">
                      <h4>Rainbow Housing</h4>
                      <div className="designation fs-16">
                        8210 Preston Rd. Inglewood
                      </div>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Location: </td>
                              <td>Maine, USA </td>
                            </tr>
                            <tr>
                              <td>Phone: </td>
                              <td>+21 456 987 330</td>
                            </tr>
                            <tr>
                              <td>Email:</td>
                              <td>rainbowhousing@demo.com </td>
                            </tr>
                            <tr>
                              <td>Website:</td>
                              <td>www.rainbowinc.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <ul className="style-none d-flex align-items-center social-icon">
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-viber"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agency-overview bottom-line-dark pb-40 mb-80 xl-mb-50">
                <h4 className="mb-20">Overview</h4>
                <p className="fs-20 lh-lg pb-15">
                  Before establishing Beratung in 2001, Mathew founded Silicon
                  Valley internet companies and later held management roles at
                  Salomon in New York.
                </p>
                <p className="fs-20 lh-lg">
                  Risk management and compliance, when approached strategically,
                  have the potential to go beyond mitigating threats and
                  protecting a company’s operations & reputation.They can
                  actually generate value and create opportunities.{" "}
                </p>
              </div>

              <div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
                <div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
                  <h4 className="mb-10">Listings</h4>
                  <div className="filter-nav-one xs-mt-40">
                    <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                      <li className="is-checked" data-filter="*">
                        All
                      </li>
                      <li data-filter=".sell">Sell</li>
                      <li data-filter=".rent">Rent</li>
                    </ul>
                  </div>
                </div>
                <div id="isotop-gallery-wrapper" className="grid-2column">
                  <div className="grid-sizer"></div>
                  <div className="isotop-item rent">
                    <div className="listing-card-one shadow-none style-two mb-50">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag bg-white text-dark fw-500">
                            FOR RENT
                          </div>
                          <img
                            src="/images/listing/img_69.jpg"
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
                            $2,210/ <sub>m</sub>
                          </strong>
                          <div className="address pt-5 m0">
                            6391 Elgin St. Celina
                          </div>
                        </div>
                        <a href="#" className="btn-four mb-5">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="isotop-item sell">
                    <div className="listing-card-one shadow-none style-two mb-50">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag bg-white text-dark fw-500">
                            FOR RENT
                          </div>
                          <img
                            src="/images/listing/img_70.jpg"
                            className="w-100"
                            alt="..."
                          />

                          <div className="img-slider-btn">
                            03 <i className="fa-regular fa-image"></i>
                            <a
                              href="/images/listing/img_large_01.jpg"
                              className="d-block"
                              data-fancybox="img2"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_02.jpg"
                              className="d-block"
                              data-fancybox="img2"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_03.jpg"
                              className="d-block"
                              data-fancybox="img2"
                              data-caption="Blueberry villa"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                          <strong className="price fw-500 color-dark">
                            $2,210/ <sub>m</sub>
                          </strong>
                          <div className="address pt-5 m0">
                            6391 Elgin St. Celina
                          </div>
                        </div>
                        <a href="#" className="btn-four mb-5">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="isotop-item sell">
                    <div className="listing-card-one shadow-none style-two mb-50">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag bg-white text-dark fw-500">
                            FOR SELL
                          </div>
                          <img
                            src="/images/listing/img_71.jpg"
                            className="w-100"
                            alt="..."
                          />

                          <div className="img-slider-btn">
                            03 <i className="fa-regular fa-image"></i>
                            <a
                              href="/images/listing/img_large_01.jpg"
                              className="d-block"
                              data-fancybox="img3"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_02.jpg"
                              className="d-block"
                              data-fancybox="img3"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_03.jpg"
                              className="d-block"
                              data-fancybox="img3"
                              data-caption="Blueberry villa"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                          <strong className="price fw-500 color-dark">
                            $1,23,710
                          </strong>
                          <div className="address pt-5 m0">
                            6391 Elgin St. Celina
                          </div>
                        </div>
                        <a href="#" className="btn-four mb-5">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="isotop-item rent">
                    <div className="listing-card-one shadow-none style-two mb-50">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag bg-white text-dark fw-500">
                            FOR SELL
                          </div>
                          <img
                            src="/images/listing/img_72.jpg"
                            className="w-100"
                            alt="..."
                          />

                          <div className="img-slider-btn">
                            03 <i className="fa-regular fa-image"></i>
                            <a
                              href="/images/listing/img_large_01.jpg"
                              className="d-block"
                              data-fancybox="img4"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_02.jpg"
                              className="d-block"
                              data-fancybox="img4"
                              data-caption="Blueberry villa"
                            ></a>
                            <a
                              href="/images/listing/img_large_03.jpg"
                              className="d-block"
                              data-fancybox="img4"
                              data-caption="Blueberry villa"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                          <strong className="price fw-500 color-dark">
                            $78,420
                          </strong>
                          <div className="address pt-5 m0">
                            6391 Elgin St. Celina
                          </div>
                        </div>
                        <a href="#" className="btn-four mb-5">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-panel-one bottom-line-dark pb-40 mb-80 xl-mb-50">
                <div className="position-relative z-1">
                  <div className="d-sm-flex justify-content-between align-items-center mb-10">
                    <h4 className="m0 xs-pb-30">All Reviews (4.7 Rating)</h4>
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
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          sed nulla facili diam posuere aliquam suscipit quam.
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
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          sed nulla facili diam posuere aliquam suscipit quam.
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
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          sed nulla facili diam posuere aliquam suscipit quam.
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
                  <div className="load-more-review text-uppercase fw-500 w-100 inverse rounded-0 tran3s">
                    VIEW ALL 120 REVIEWS{" "}
                    <i className="bi bi-arrow-up-right"></i>
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
                  to post your comment or signup if you don&lsquo;t have any account.
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
            <div className="col-lg-4">
              <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">
                <div className="tour-schedule bg-white p-30 mb-40">
                  <h5 className="mb-40">Contact Form</h5>
                  <form action="#">
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
                    <button className="btn-nine text-uppercase w-100 mb-20">
                      INQUIry
                    </button>
                  </form>
                  <a
                    href="tel:+548842445"
                    className="btn-eight sm text-uppercase w-100 rounded-0 tran3s"
                  >
                    CALL NOW
                  </a>
                </div>

                <div className="agent-finder bg-white p-30">
                  <h5 className="mb-40">Search Agency</h5>
                  <form action="#">
                    <div className="input-box-one mb-25">
                      <div className="label">Agency Name</div>
                      <input
                        type="text"
                        placeholder="Type Agency Name"
                        className="type-input"
                      />
                    </div>
                    <div className="input-box-one mb-25">
                      <div className="label">Keyword</div>
                      <input
                        type="text"
                        placeholder="Apartments, Villa"
                        className="type-input"
                      />
                    </div>
                    <div className="input-box-one mb-25">
                      <div className="label">Location</div>
                      <select className="nice-select fw-normal">
                        <option value="1">Dhanmondi, Dhaka</option>
                        <option value="2">Acapulco, Mexico</option>
                        <option value="3">Berlin, Germany</option>
                        <option value="4">Cannes, France</option>
                        <option value="5">Delhi, India</option>
                        <option value="6">Giza, Egypt </option>
                        <option value="7">Havana, Cuba</option>
                      </select>
                    </div>
                    <button className="btn-nine text-uppercase w-100 mb-10">
                      SEARCH
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
