import React from "react";

type Props = {};

const AccountSettings = (props: Props) => {
  return (
    <>
      <h2 className="main-title d-block d-lg-none">Account Settings</h2>

      <div className="bg-white card-box border-20">
        <h4 className="dash-title-three">Edit & Update</h4>
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Rashed" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Kabir" />
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="rshakbair365@gmal.com" />
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Phone Number</label>
                <input type="tel" placeholder="+810 321 889 021" />
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Password</label>
                <input type="password" />

                <div className="info-text d-sm-flex align-items-center justify-content-between mt-5">
                  <p className="m0">
                    Want to change the password?{" "}
                    <a href="account-settings(pass-change).html">Click here</a>
                  </p>
                  <a
                    href="account-settings(pass-change).html"
                    className="chng-pass"
                  >
                    Change Password
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <a href="#" className="dash-btn-two tran3s me-3">
              Save
            </a>
            <a href="#" className="dash-cancel-btn tran3s">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSettings;
