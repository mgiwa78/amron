"use client";
import SideBar from "@/components/admin/SideBar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const pageName = path
    ? path?.split("/")[1][0]?.toUpperCase() +
      path?.split("/")[1]?.slice(1)?.toLowerCase()
    : "Dashboard";
  return (
    <>
      <body>
        {/* <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="icon">
              <img
                src="/images/loader.gif"
                alt=""
                className="m-auto d-block"
                width="64"
              />
            </div>
          </div>
        </div> */}

        <div
          className="modal fade"
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen modal-dialog-centered">
            <div className="container">
              <div className="remove-account-popup text-center modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img
                  src="/images/lazy.svg"
                  data-src="images/icon/icon_22.svg"
                  alt=""
                  className="lazy-img m-auto"
                />
                <h2>Are you sure?</h2>
                <p>
                  Are you sure to delete your account? All data will be lost.
                </p>
                <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
                  <a href="#" className="confirm-btn fw-500 tran3s me-3">
                    Yes
                  </a>
                  <button
                    type="button"
                    className="btn-close fw-500 ms-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="scroll-top">
          <i className="bi bi-arrow-up-short"></i>
        </button>

        <SideBar />
        <div className="dashboard-body">
          <header className="dashboard-header">
            <div className="d-flex align-items-center justify-content-end">
              <h4 className="m0 d-none d-lg-block">{pageName}</h4>
              <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
                <span></span>
              </button>
              <form action="#" className="search-form ms-auto">
                <input type="text" placeholder="Search here.." />
                <button>
                  <img
                    src="/admin/images/icon/icon_43.svg"
                    alt=""
                    className=" m-auto"
                  />
                </button>
              </form>
              <div className="profile-notification position-relative dropdown-center ms-3 ms-md-5 me-4">
                <button
                  className="noti-btn dropdown-toggle"
                  type="button"
                  id="notification-dropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <img
                    src="/admin/images/icon/icon_11.svg"
                    alt=""
                    className=""
                  />
                  <div className="badge-pill"></div>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="notification-dropdown"
                >
                  <li>
                    <h4>Notification</h4>
                    <ul className="style-none notify-list">
                      <li className="d-flex align-items-center unread">
                        <img
                          src="/admin/images/icon/icon_36.svg"
                          alt=""
                          className=" icon"
                        />
                        <div className="flex-fill ps-2">
                          <h6>You have 3 new mails</h6>
                          <span className="time">3 hours ago</span>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          src="/admin/images/icon/icon_37.svg"
                          alt=""
                          className=" icon"
                        />
                        <div className="flex-fill ps-2">
                          <h6>Your listing post has been approved</h6>
                          <span className="time">1 day ago</span>
                        </div>
                      </li>
                      <li className="d-flex align-items-center unread">
                        <img
                          src="/admin/images/icon/icon_38.svg"
                          alt=""
                          className=" icon"
                        />
                        <div className="flex-fill ps-2">
                          <h6>Your meeting is cancelled</h6>
                          <span className="time">3 days ago</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="d-none d-md-block me-3">
                <a href="add-property.html" className="btn-two">
                  <span>Add Listing</span>{" "}
                  <i className="fa-thin fa-arrow-up-right"></i>
                </a>
              </div>
              <div className="user-data position-relative">
                <button
                  className="user-avatar online position-relative rounded-circle dropdown-toggle"
                  type="button"
                  id="profile-dropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <img src="/admin/images/avatar_01.jpg" alt="" className="" />
                </button>
                <div className="user-name-data">
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="profile-dropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="profile.html"
                      >
                        <img
                          src="/admin/images/icon/icon_23.svg"
                          alt=""
                          className=""
                        />
                        <span className="ms-2 ps-1">Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="account-settings.html"
                      >
                        <img
                          src="/admin/images/icon/icon_24.svg"
                          alt=""
                          className=""
                        />
                        <span className="ms-2 ps-1">Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <img
                          src="/admin/images/icon/icon_25.svg"
                          alt=""
                          className=""
                        />
                        <span className="ms-2 ps-1">Delete Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="position-relative">{children}</div>
        </div>
      </body>
    </>
  );
}
