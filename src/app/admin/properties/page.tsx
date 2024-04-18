import React from "react";

type Props = {};

const Properties = (props: Props) => {
  return (
    <>
      <h2 className="main-title d-block d-lg-none">My Properties</h2>
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
              <option value="1">Best Seller</option>
              <option value="2">Best Match</option>
              <option value="3">Price Low</option>
              <option value="4">Price High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white card-box p0 border-20">
        <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
          <table className="table property-list-table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">View</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="border-0">
              <tr>
                <td>
                  <div className="d-lg-flex align-items-center position-relative">
                    <img
                      src="/admin/images/img_01.jpg"
                      alt=""
                      className="p-img"
                    />
                    <div className="ps-lg-4 md-pt-10">
                      <a
                        href="#"
                        className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                      >
                        Galaxy Flat
                      </a>
                      <div className="address">Mirpur 10, dhaka, BD</div>
                      <strong className="price color-dark">$32,800</strong>
                    </div>
                  </div>
                </td>
                <td>13 Jan, 2023</td>
                <td>1210</td>
                <td>
                  <div className="property-status">Active</div>
                </td>
                <td>
                  <div className="action-dots float-end">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_18.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_19.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_20.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_21.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-lg-flex align-items-center position-relative">
                    <img
                      src="/admin/images/img_02.jpg"
                      alt=""
                      className="p-img"
                    />
                    <div className="ps-lg-4 md-pt-10">
                      <a
                        href="#"
                        className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                      >
                        White House villa
                      </a>
                      <div className="address">Ranchview, California, USA</div>
                      <strong className="price color-dark">$42,130</strong>
                    </div>
                  </div>
                </td>
                <td>09 Jan, 2023</td>
                <td>0</td>
                <td>
                  <div className="property-status pending">Pending</div>
                </td>
                <td>
                  <div className="action-dots float-end">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_18.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_19.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_20.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_21.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-lg-flex align-items-center position-relative">
                    <img
                      src="/admin/images/img_03.jpg"
                      alt=""
                      className="p-img"
                    />
                    <div className="ps-lg-4 md-pt-10">
                      <a
                        href="#"
                        className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                      >
                        Luxury villa in Dal lake
                      </a>
                      <div className="address">Muza link road, ca, usa</div>
                      <strong className="price color-dark">
                        $2,370/<sub>m</sub>
                      </strong>
                    </div>
                  </div>
                </td>
                <td>17 Oct, 2022</td>
                <td>0</td>
                <td>
                  <div className="property-status processing">Processing</div>
                </td>
                <td>
                  <div className="action-dots float-end">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_18.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_19.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_20.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_21.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-lg-flex align-items-center position-relative">
                    <img
                      src="/admin/images/img_04.jpg"
                      alt=""
                      className="p-img"
                    />
                    <div className="ps-lg-4 md-pt-10">
                      <a
                        href="#"
                        className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                      >
                        Wooden World
                      </a>
                      <div className="address">
                        Board Baxar, Califronia, USA
                      </div>
                      <strong className="price color-dark">$63,300</strong>
                    </div>
                  </div>
                </td>
                <td>23 Sep, 2022</td>
                <td>970</td>
                <td>
                  <div className="property-status">Active</div>
                </td>
                <td>
                  <div className="action-dots float-end">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_18.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_19.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_20.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_21.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-lg-flex align-items-center position-relative">
                    <img
                      src="/admin/images/img_05.jpg"
                      alt=""
                      className="p-img"
                    />
                    <div className="ps-lg-4 md-pt-10">
                      <a
                        href="#"
                        className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                      >
                        Orkit Villa
                      </a>
                      <div className="address">Green Road, Uttara, BD</div>
                      <strong className="price color-dark">$72,000</strong>
                    </div>
                  </div>
                </td>
                <td>15 Aug, 2022</td>
                <td>2320</td>
                <td>
                  <div className="property-status">Active</div>
                </td>
                <td>
                  <div className="action-dots float-end">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_18.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          View
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_19.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_20.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="/admin/images/icon/icon_21.svg"
                            alt=""
                            className="lazy-img"
                          />{" "}
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ul className="pagination-one d-flex align-items-center justify-content-center style-none pt-40">
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
            <img src="/admin/images/icon/icon_46.svg" alt="" className="ms-2" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Properties;
