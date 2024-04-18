import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <h2 className="main-title d-block d-lg-none">Profile</h2>

      <div className="bg-white card-box border-20">
        <div className="user-avatar-setting d-flex align-items-center mb-30">
          <img src="/admin/images/avatar_02.jpg" alt="" className=" user-img" />
          <div className="upload-btn position-relative tran3s ms-4 me-3">
            Upload new photo
            <input type="file" id="uploadImg" name="uploadImg" placeholder="" />
          </div>
          <button className="delete-btn tran3s">Delete</button>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Username*</label>
              <input type="text" placeholder="JonyRio" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">First Name*</label>
              <input type="text" placeholder="Mr Johny" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Last Name*</label>
              <input type="text" placeholder="Riolek" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Email*</label>
              <input type="email" placeholder="companyinc@mail.com" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Position*</label>
              <select className="nice-select">
                <option>Agent</option>
                <option>Agency</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Phone Number*</label>
              <input type="tel" placeholder="+880 01723801729" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Website*</label>
              <input type="text" placeholder="http://somename.com/" />
            </div>
          </div>
          <div className="col-12">
            <div className="dash-input-wrapper">
              <label htmlFor="">About*</label>
              <textarea
                className="size-lg"
                placeholder="I am working for the last 4 years as a web designer, graphics designer and well as UI/UX designer............."
              ></textarea>
              <div className="alert-text">
                Brief description for your profile. URLs are hyperlinked.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three">Social Media</h4>

        <div className="dash-input-wrapper mb-20">
          <label htmlFor="">Network 1</label>
          <input
            type="text"
            placeholder="https://www.facebook.com/zubayer0145"
          />
        </div>
        <div className="dash-input-wrapper mb-20">
          <label htmlFor="">Network 2</label>
          <input type="text" placeholder="https://twitter.com/FIFAcom" />
        </div>
        <a href="#" className="dash-btn-one">
          <i className="bi bi-plus"></i> Add more link
        </a>
      </div>

      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three">Address & Location</h4>
        <div className="row">
          <div className="col-12">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Address*</label>
              <input type="text" placeholder="19 Yawkey Way" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Country*</label>
              <select className="nice-select">
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">City*</label>
              <select className="nice-select">
                <option>Boston</option>
                <option>Tokyo</option>
                <option>Delhi</option>
                <option>Shanghai</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Zip Code*</label>
              <input type="number" placeholder="1708" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">State*</label>
              <select className="nice-select">
                <option>Maine</option>
                <option>Tokyo</option>
                <option>Delhi</option>
                <option>Shanghai</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Map Location*</label>
              <div className="position-relative">
                <input type="text" placeholder="XC23+6XC, Moiran, N105" />
                <button className="location-pin tran3s">
                  <img
                    src="/admin/images/icon/icon_16.svg"
                    alt=""
                    className=" m-auto"
                  />
                </button>
              </div>
              <div className="map-frame mt-30">
                <div className="gmap_canvas h-100 w-100">
                  <iframe
                    className="gmap_iframe h-100 w-100"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka%20collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
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
    </>
  );
};

export default Profile;
