"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const path = usePathname();
  const pageName = path
    ? path?.split("/")[1][0]?.toUpperCase() +
      path?.split("/")[1]?.slice(1)?.toLowerCase()
    : "Dashboard";

  return (
    <>
      <h2 className="main-title d-block d-lg-none">{pageName}</h2>
      <div className="bg-white border-20">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="dash-card-one bg-white border-30 position-relative mb-15 skew-none">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                  <img src="/admin/images/icon/icon_12.svg" alt="" />
                </div>
                <div className="order-sm-0">
                  <span>All Properties</span>
                  <div className="value fw-500">1.7k+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="dash-card-one bg-white border-30 position-relative mb-15">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                  <img
                    src="/admin/images/icon/icon_13.svg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="order-sm-0">
                  <span>Total Pending</span>
                  <div className="value fw-500">03</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="dash-card-one bg-white border-30 position-relative mb-15">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                  <img
                    src="/admin/images/icon/icon_14.svg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="order-sm-0">
                  <span>Total Views</span>
                  <div className="value fw-500">4.8k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="dash-card-one bg-white border-30 position-relative mb-15">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                  <img
                    src="/admin/images/icon/icon_15.svg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="order-sm-0">
                  <span>Total Favourites</span>
                  <div className="value fw-500">07</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-xxl-5 d-flex pt-15 lg-pt-10">
        <div className="col-xl-7 col-lg-6 d-flex flex-column">
          <div className="user-activity-chart bg-white border-20 mt-30 h-100">
            <div className="d-flex align-items-center justify-content-between plr">
              <h5 className="dash-title-two">Property View</h5>
              <div className="short-filter d-flex align-items-center">
                <div className="fs-16 me-2">Short by:</div>
                <select className="nice-select fw-normal">
                  <option value="0">Weekly</option>
                  <option value="1">Daily</option>
                  <option value="2">Monthly</option>
                </select>
              </div>
            </div>
            <div className="plr mt-50">
              <div className="chart-wrapper">
                <canvas id="property-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 d-flex">
          <div className="recent-job-tab bg-white border-20 mt-30 plr w-100">
            <h5 className="dash-title-two">Recent Message</h5>
            <div className="message-wrapper">
              <div className="message-sidebar border-0">
                <div className="email-read-panel">
                  <div className="email-list-item read border-0 pt-0">
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
                            className=" me-2"
                          />
                          <span>details.pdf</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item primary">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Hasan Islam.</div>
                        <div className="date">May 22</div>
                      </div>
                      <div className="mail-sub">
                        Product Designer Opportunities
                      </div>
                      <div className="mail-text">
                        Hello, Greeting from Uber. Hope you doing great. I am
                        approcing to you for..
                      </div>
                    </div>
                  </div>

                  <div className="email-list-item">
                    <div className="email-short-preview position-relative">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="sender-name">Jakie Chan</div>
                        <div className="date">July 22</div>
                      </div>
                      <div className="mail-sub">
                        Hunting Marketing Specialist
                      </div>
                      <div className="mail-text">
                        Hello, This is Jannat from HuntX. We offer business
                        solution to our client..
                      </div>
                    </div>
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

export default Dashboard;
