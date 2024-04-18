import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  const pathName = usePathname();
  return (
    <aside className="dash-aside-navbar">
      <div className="position-relative">
        <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
          <a href="dashboard-index.html">
            <img
              src="/images/logo/logo_01 copy.png"
              style={{ height: "70px" }}
              alt=""
            />
          </a>
          <button className="close-btn d-block d-md-none">
            <i className="fa-light fa-circle-xmark"></i>
          </button>
        </div>
        <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
          <ul className="style-none">
            <li className="plr">
              <Link
                href="/admin"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin" && "active"
                }`}
              >
                {pathName !== "/admin" && (
                  <img src="/admin/images/icon/icon_1.svg" alt="" />
                )}
                {pathName === "/admin" && (
                  <img src="/admin/images/icon/icon_1_active.svg" alt="" />
                )}
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/admin/message"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/message" && "active"
                }`}
              >
                {pathName !== "/admin/message" && (
                  <img src="/admin/images/icon/icon_2.svg" alt="" />
                )}
                {pathName === "/admin/message" && (
                  <img src="/admin/images/icon/icon_2_active.svg" alt="" />
                )}

                <span>Message</span>
              </Link>
            </li>
            <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
            <li>
              <div className="nav-title">Profile</div>
            </li>
            <li className="plr">
              <Link
                href="profile"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/profile" && "active"
                }`}
              >
                {pathName !== "/admin/profile" && (
                  <img src="/admin/images/icon/icon_3.svg" alt="" />
                )}
                {pathName === "/admin/profile" && (
                  <img src="/admin/images/icon/icon_3_active.svg" alt="" />
                )}
                <span>Profile</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/admin/account-settings"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/account-settings" && "active"
                }`}
              >
                {pathName !== "/admin/account-settings" && (
                  <img src="/admin/images/icon/icon_4.svg" alt="" />
                )}
                {pathName === "/admin/account-settings" && (
                  <img src="/admin/images/icon/icon_4_active.svg" alt="" />
                )}
                <span>Account Settings</span>
              </Link>
            </li>

            <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
            <li>
              <div className="nav-title">Listing</div>
            </li>
            <li className="plr">
              <Link
                href="/admin/properties"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/properties" && "active"
                }`}
              >
                {pathName !== "/admin/properties" && (
                  <img src="/admin/images/icon/icon_6.svg" alt="" />
                )}
                {pathName === "/admin/properties" && (
                  <img src="/admin/images/icon/icon_6_active.svg" alt="" />
                )}

                <span>My Properties</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/admin/add-property"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/add-property" && "active"
                }`}
              >
                {pathName === "/admin/add-property" && (
                  <img src="/admin/images/icon/icon_7_active.svg" alt="" />
                )}
                {pathName !== "/admin/add-property" && (
                  <img src="/admin/images/icon/icon_7.svg" alt="" />
                )}
                <span>Add New Property</span>
              </Link>
            </li>

            <li className="plr">
              <Link
                href="reviews"
                className={`d-flex w-100 align-items-center ${
                  pathName === "/admin/reviews" && "active"
                }`}
              >
                {pathName !== "/admin/reviews" && (
                  <img src="/admin/images/icon/icon_10.svg" alt="" />
                )}
                {pathName === "/admin/reviews" && (
                  <img src="/admin/images/icon/icon_10_active.svg" alt="" />
                )}

                <span>Reviews</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="profile-complete-status bottom-line pb-35 plr">
          <div className="progress-value fw-500">82%</div>
          <div className="progress-line position-relative">
            <div className="inner-line" style={{ width: "80%" }}></div>
          </div>
          <p>Profile Complete</p>
        </div>

        <div className="plr">
          <a href="#" className="d-flex w-100 align-items-center logout-btn">
            <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
              <img src="/admin/images/icon/icon_41.svg" alt="" />
            </div>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
