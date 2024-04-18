import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <>
      <h2 className="main-title d-block d-lg-none">Reviews</h2>

      <div className="d-sm-flex align-items-center justify-content-between mb-25">
        <div className="fs-16">
          Showing <span className="color-dark fw-500">1–5</span> of{" "}
          <span className="color-dark fw-500">40</span> results
        </div>
        <div className="d-flex ms-auto xs-mt-30">
          <div className="short-filter d-flex align-items-center ms-sm-auto">
            <div className="fs-16 me-2">Short by:</div>
            <select className="nice-select">
              <option value="0">Newest</option>
              <option value="1">Best Rating</option>
              <option value="3">Rating Low</option>
              <option value="4">Rating High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white card-box pt-0 border-20">
        <div className="theme-details-one">
          <div className="review-panel-one">
            <div className="position-relative z-1">
              <div className="review-wrapper">
                <div className="review">
                  <img
                    src="../images/media/img_01.jpg"
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
                          <span className="fst-italic me-2">(4.7 Rating)</span>{" "}
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
                      <a href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                        <span>Flag</span>
                      </a>
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-reply"></i>{" "}
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="review">
                  <img
                    src="../images/media/img_03.jpg"
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
                          <span className="fst-italic me-2">(4.9 Rating)</span>{" "}
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
                          href="../images/listing/img_large_01.jpg"
                          className="d-block"
                          data-fancybox="revImg"
                          data-caption="Duplex orkit villa"
                        >
                          <img src="../images/listing/img_48.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/listing/img_large_02.jpg"
                          className="d-block"
                          data-fancybox="revImg"
                          data-caption="Duplex orkit villa"
                        >
                          <img src="../images/listing/img_49.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/listing/img_large_03.jpg"
                          className="d-block"
                          data-fancybox="revImg"
                          data-caption="Duplex orkit villa"
                        >
                          <img src="../images/listing/img_50.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <div className="position-relative more-img">
                          <img src="../images/listing/img_50.jpg" alt="" />
                          <span>13+</span>
                          <a
                            href="../images/listing/img_large_04.jpg"
                            className="d-block"
                            data-fancybox="revImg"
                            data-caption="Duplex orkit villa."
                          ></a>
                          <a
                            href="../images/listing/img_large_05.jpg"
                            className="d-block"
                            data-fancybox="revImg"
                            data-caption="Duplex orkit villa."
                          ></a>
                          <a
                            href="../images/listing/img_large_06.jpg"
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
                      <a href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                        <span>Flag</span>
                      </a>
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-reply"></i>{" "}
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="review">
                  <img
                    src="../images/media/img_02.jpg"
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
                          <span className="fst-italic me-2">(4.7 Rating)</span>{" "}
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
                      Lorem ipsum dolor sit amet consectetur. Amet amet id
                      cursus dignissim. Eget vitae amet tempus sit mattis.
                      Semper integer condimentum nunc augue aliquet quam a
                      tincidunt.
                    </p>
                    <div className="d-flex review-help-btn">
                      <a href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-thumbs-up"></i>{" "}
                        <span>Helpful</span>
                      </a>
                      <a href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                        <span>Flag</span>
                      </a>
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-reply"></i>{" "}
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="review border-0 pb-0">
                  <img
                    src="../images/media/img_01.jpg"
                    alt=""
                    className="rounded-circle avatar"
                  />
                  <div className="text">
                    <div className="d-sm-flex justify-content-between">
                      <div>
                        <h6 className="name">Milon Ahmed</h6>
                        <div className="time fs-16">7 Jan, 23</div>
                      </div>
                      <ul className="rating style-none d-flex xs-mt-10">
                        <li>
                          <span className="fst-italic me-2">(4.7 Rating)</span>{" "}
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
                      <a href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>{" "}
                        <span>Flag</span>
                      </a>
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-reply"></i>{" "}
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="pagination-one d-flex align-items-center style-none pt-40">
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
            <img src="../images/icon/icon_46.svg" alt="" className="ms-2" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Reviews;
