import React from "react";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <div className="error-section position-relative z-1 bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-6 col-lg-7 col-md-8 m-auto">
            <div className="title-one text-center mb-75 lg-mb-20 wow fadeInUp">
              <h3>
                <span>
                  Oops!
                  <img
                    src="/images/shape/title_shape_02.svg"
                    alt=""
                    className=""
                  />
                </span>
                It looks like you're lost.
              </h3>
              <p className="fs-20 pb-45">
                The page you're looking for isn't available. Try to search again
                or use the go to
              </p>
              <a
                href="index.html"
                className="btn-five sm fw-normal text-uppercase"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/assets/ils_08.svg"
        alt=""
        className=" w-100 position-absolute bottom-0 start-0 z-n1"
      />
    </div>
  );
};

export default Error404;
