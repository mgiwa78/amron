import React from "react";

type Props = {};

const Message = (props: Props) => {
  return (
    <>
      <div className="row gx-0 align-items-center">
        <div
          className="offcanvas compose-mail-offcanvas"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="compose-new-email-container">
            <div className="new-email-header position-relative">
              <div className="btn-group">
                <a
                  data-bs-toggle="collapse"
                  href="#CC-input"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Cc
                </a>
                <a
                  data-bs-toggle="collapse"
                  href="#BCC-input"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Bcc
                </a>
              </div>
              <div className="input-group d-flex align-items-center">
                <div className="text-center" style={{ width: "60%" }}>
                  To
                </div>
                <input
                  type="email"
                  className="flex-fill"
                  placeholder="payoneer@inquiry.com"
                />
              </div>
              <div className="collapse" id="CC-input">
                <div className="input-group d-flex align-items-center">
                  <div className="text-center" style={{ width: "60%" }}>
                    Cc
                  </div>
                  <input
                    type="email"
                    className="flex-fill"
                    placeholder="payoneer@inquiry.com"
                  />
                </div>
              </div>
              <div className="collapse" id="BCC-input">
                <div className="input-group d-flex align-items-center">
                  <div className="text-center" style={{ width: "60%" }}>
                    Bcc
                  </div>
                  <input
                    type="email"
                    className="flex-fill"
                    placeholder="payoneer@inquiry.com"
                  />
                </div>
              </div>
            </div>
            <div className="compose-body">
              <textarea>
                Hi, Mary Cooper! Thanks for your invitation for the account
                manager position for you company. I Will back to you soon with
                all the require documents.
              </textarea>
            </div>

            <div className="compose-email-footer d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="insert-file position-relative me-3">
                  <img
                    src="/admin/images/icon/icon_32.svg"
                    alt=""
                    className="lazy-img"
                  />
                  <input
                    type="file"
                    name="uploadImg"
                    placeholder=""
                    title="Insert File"
                  />
                </div>
                <button className="insert-emoji me-3">
                  <img
                    src="/admin/images/icon/icon_33.svg"
                    alt=""
                    className="lazy-img"
                  />
                </button>
                <div className="insert-file position-relative me-3">
                  <img
                    src="/admin/images/icon/icon_34.svg"
                    alt=""
                    className="lazy-img"
                  />
                  <input
                    type="file"
                    name="uploadImg"
                    placeholder=""
                    title="Insert Image"
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                <a href="#" className="delete-mail me-3">
                  <img
                    src="/admin/images/icon/icon_35.svg"
                    alt=""
                    className="lazy-img"
                  />
                </a>
                <a href="#" className="reply-btn tran3s">
                  Reply
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="col-lg-4">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="main-title d-block d-lg-none m0">Messages</h2>
            <a
              className="new-message-compose rounded-circle"
              data-bs-toggle="offcanvas"
              href="#offcanvasScrolling"
              role="button"
              aria-controls="offcanvasScrolling"
            >
              +
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="message-pagination ps-lg-4 ps-xxl-5 d-flex align-items-center justify-content-between md-mt-40">
            <a href="javascript:void()" className="prev-msg">
              <img
                src="/admin/images/icon/icon_26.svg"
                alt=""
                className="lazy-img"
              />
            </a>
            <div className="d-flex align-items-center">
              <a href="#">
                <i className="bi bi-chevron-left"></i>
              </a>
              <span>1-5 of 120</span>
              <a href="#">
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
            <a href="javascript:void()" className="next-msg">
              <img
                src="/admin/images/icon/icon_27.svg"
                alt=""
                className="lazy-img"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white card-box border-20 p0 mt-30">
        <div className="message-wrapper">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="message-sidebar pt-20">
                <div className="ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="page-title fw-500">Inbox</div>
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
                            Sent
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Important
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Draft
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Trash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <form action="#" className="search-form mt-20 mb-20">
                    <input type="text" placeholder="Search contacts" />
                    <button>
                      <img
                        src="/admin/images/icon/icon_43.svg"
                        alt=""
                        className="lazy-img m-auto"
                      />
                    </button>
                  </form>

                  <div
                    className="message_filter d-flex align-items-center justify-content-between mb-20"
                    id="module_btns"
                  >
                    <button className="filter_btn active">All</button>
                    <button className="filter_btn">
                      <span style={{ backgroundColor: "#FF4545" }}></span> Read
                    </button>
                    <button className="filter_btn">
                      <span style={{ backgroundColor: "#3BDA84" }}></span>{" "}
                      Unread
                    </button>
                    <button className="filter_btn">
                      <span style={{ backgroundColor: "#50C0FF" }}></span>{" "}
                      Primary
                    </button>
                  </div>
                </div>
                <div className="email-read-panel">
                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jenny Rio.</div>
                        <div className="date">Aug 22</div>
                      </div>
                      <div className="mail-sub">Work inquiry from google.</div>
                      <div className="mail-text">
                        Hello, This is Jenny from google. We’r the largest
                        online platform offer...
                      </div>
                      <div className="attached-file-preview d-flex align-items-center mt-15">
                        <div className="file d-flex align-items-center me-2">
                          <img
                            src="/admin/images/icon/icon_28.svg"
                            alt=""
                            className="lazy-img me-2"
                          />
                          <span>details.pdf</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 primary selected">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Hasan Islam.</div>
                        <div className="date">May 22</div>
                      </div>
                      <div className="mail-sub">Account Manager</div>
                      <div className="mail-text">
                        Hello, Greeting from Uber. Hope you doing great. I am
                        approcing to you for..
                      </div>
                      <div className="attached-file-preview d-flex align-items-center mt-15">
                        <div className="file d-flex align-items-center me-2">
                          <img
                            src="/admin/images/icon/icon_28.svg"
                            alt=""
                            className="lazy-img me-2"
                          />
                          <span>details.pdf</span>
                        </div>
                        <div className="file d-flex align-items-center me-2">
                          <img
                            src="/admin/images/icon/icon_28.svg"
                            alt=""
                            className="lazy-img me-2"
                          />
                          <span>form.pdf</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jannatul Ferdaus.</div>
                        <div className="date">Jun 22</div>
                      </div>
                      <div className="mail-sub">
                        Product Designer Opportunities
                      </div>
                      <div className="mail-text">
                        Hello, This is Jannat from HuntX. We offer business
                        solution to our client..
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jakie Chan</div>
                        <div className="date">NOV 22</div>
                      </div>
                      <div className="mail-sub">
                        Hunting Marketing Specialist
                      </div>
                      <div className="mail-text">
                        Hello, We’r the well known Real Estate Inc provide best
                        interior/exterior solut...
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jakie Chan</div>
                        <div className="date">NOV 22</div>
                      </div>
                      <div className="mail-sub">
                        Hunting Marketing Specialist
                      </div>
                      <div className="mail-text">
                        Hello, We’r the well known Real Estate Inc provide best
                        interior/exterior solut...
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jakie Chan</div>
                        <div className="date">NOV 22</div>
                      </div>
                      <div className="mail-sub">
                        Hunting Marketing Specialist
                      </div>
                      <div className="mail-text">
                        Hello, We’r the well known Real Estate Inc provide best
                        interior/exterior solut...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="open-email-container pb-40">
                <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                  <div className="sender-info d-flex align-items-center">
                    <img
                      src="/admin/images/logo_02.png"
                      alt=""
                      className="lazy-img logo"
                    />
                    <div className="ps-3">
                      <div className="sender-name">Killwake</div>
                      <div className="sender-email">
                        kilwakesales@inquiry.com
                      </div>
                    </div>
                  </div>
                  <div className="email-info">
                    <div className="time">4:45AM (3 hours ago)</div>
                    <div className="d-flex align-items-center justify-content-end">
                      <button className="delete-email">
                        <img
                          src="/admin/images/icon/icon_29.svg"
                          alt=""
                          className="lazy-img"
                        />
                      </button>
                      <button className="reply-email ms-3 me-3">
                        <img
                          src="/admin/images/icon/icon_30.svg"
                          alt=""
                          className="lazy-img"
                        />
                      </button>
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
                              Reply
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Fowrward
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="email-body divider">
                  <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                    <h2>Payment Verification</h2>
                    <p>
                      Hello, Greeting from Uber. Hope you doing great. I am
                      approaching to you for as our company need a great &
                      talented account manager.{" "}
                    </p>
                    <p>What we need from you to start:</p>
                    <ul className="style-none mb-30">
                      <li>- Your CV</li>
                      <li>- Verified Gov ID</li>
                    </ul>
                    <p>
                      After that we need to redesign our landing page because
                      the current one doesn&lsquo;t carry any information. If
                      you have any question don&lsquo;t hesitate to contact us.
                    </p>
                    <p>
                      Our Telegram{" "}
                      <a href="#" className="fw-500">
                        @rainbow
                      </a>{" "}
                      <br />
                      Thank you!
                    </p>
                  </div>
                </div>

                <div className="email-footer">
                  <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                    <div className="attachments mb-30">
                      <div className="d-flex justify-content-between mb-5">
                        <h6 className="m0">2 Attachment</h6>
                        <a href="#" className="all-download">
                          Download All
                        </a>
                      </div>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="file tran3s d-flex align-items-center mt-10"
                          download
                        >
                          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                            <img
                              src="/admin/images/icon/icon_31.svg"
                              alt=""
                              className="lazy-img"
                            />
                          </div>
                          <div className="ps-2">
                            <div className="file-name">project-details.pdf</div>
                            <div className="file-size">2.3mb</div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="file tran3s d-flex align-items-center mt-10"
                          download
                        >
                          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                            <img
                              src="/admin/images/icon/icon_31.svg"
                              alt=""
                              className="lazy-img"
                            />
                          </div>
                          <div className="ps-2">
                            <div className="file-name">form.pdf</div>
                            <div className="file-size">1.3mb</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="compose-new-email-container">
                      <div className="new-email-header position-relative">
                        <div className="btn-group">
                          <a
                            data-bs-toggle="collapse"
                            href="#CC-input"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            Cc
                          </a>
                          <a
                            data-bs-toggle="collapse"
                            href="#BCC-input"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            Bcc
                          </a>
                        </div>
                        <div className="input-group d-flex align-items-center">
                          <div
                            className="text-center"
                            style={{ width: "60%" }}
                          />
                          To
                        </div>
                        <input
                          type="email"
                          className="flex-fill"
                          placeholder="rainbowsales@inquiry.com"
                        />
                      </div>
                      <div className="collapse" id="CC-input">
                        <div className="input-group d-flex align-items-center">
                          <div
                            className="text-center"
                            style={{ width: "60%" }}
                          />
                          Cc
                        </div>
                        <input
                          type="email"
                          className="flex-fill"
                          placeholder="zoonwala@inquiry.com"
                        />
                      </div>
                    </div>
                    <div className="collapse" id="BCC-input">
                      <div className="input-group d-flex align-items-center">
                        <div className="text-center" style={{ width: "60%" }} />
                        Bcc
                      </div>
                      <input
                        type="email"
                        className="flex-fill"
                        placeholder="mojobdltd@inquiry.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="compose-body">
                  <textarea>
                    Hi, Mary Cooper! Thanks for your invitation for the account
                    manager position for you company. I Will back to you soon
                    with all the require documents.
                  </textarea>
                </div>

                <div className="compose-email-footer d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="insert-file position-relative me-3">
                      <img
                        src="/admin/images/icon/icon_32.svg"
                        alt=""
                        className="lazy-img"
                      />
                      <input
                        type="file"
                        name="uploadImg"
                        placeholder=""
                        title="Insert File"
                      />
                    </div>
                    <button className="insert-emoji me-3">
                      <img
                        src="/admin/images/icon/icon_33.svg"
                        alt=""
                        className="lazy-img"
                      />
                    </button>
                    <div className="insert-file position-relative me-3">
                      <img
                        src="/admin/images/icon/icon_34.svg"
                        alt=""
                        className="lazy-img"
                      />
                      <input
                        type="file"
                        name="uploadImg"
                        placeholder=""
                        title="Insert Image"
                      />
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <a href="#" className="delete-mail me-3">
                      <img
                        src="/admin/images/icon/icon_35.svg"
                        alt=""
                        className="lazy-img"
                      />
                    </a>
                    <a href="#" className="reply-btn tran3s">
                      Reply
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

export default Message;
