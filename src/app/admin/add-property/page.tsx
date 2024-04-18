import React from "react";

type Props = {};

const AddProperty = (props: Props) => {
  return (
    <>
      <h2 className="main-title d-block d-lg-none">Add New Property</h2>

      <div className="bg-white card-box border-20">
        <h4 className="dash-title-three">Overview</h4>
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Property Title*</label>
          <input type="text" placeholder="Your Property Name" />
        </div>
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Description*</label>
          <textarea
            className="size-lg"
            placeholder="Write about property..."
          ></textarea>
        </div>
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Category*</label>
              <select className="nice-select">
                <option value="1">Apartments</option>
                <option value="2">Condos</option>
                <option value="3">Houses</option>
                <option value="4">Industrial</option>
                <option value="6">Villas</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Listed in*</label>
              <select className="nice-select">
                <option>All Listing</option>
                <option>Buy</option>
                <option>Sell</option>
                <option>Rent</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Price*</label>
              <input type="text" placeholder="Your Price" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Yearly Tax Rate*</label>
              <input type="text" placeholder="Tax Rate" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three">Listing Details</h4>
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Size in ft*</label>
              <input type="text" placeholder="Ex: 3,210 sqft" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Bedrooms*</label>
              <select className="nice-select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Bathrooms*</label>
              <select className="nice-select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Kitchens*</label>
              <select className="nice-select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Garages</label>
              <select className="nice-select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Garage Size</label>
              <input type="text" placeholder="Ex: 1,230 sqft" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Year Built*</label>
              <input type="text" placeholder="Type Year" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Floors No*</label>
              <select className="nice-select">
                <option value="0">Ground</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="dash-input-wrapper">
              <label htmlFor="">Description*</label>
              <textarea
                className="size-lg"
                placeholder="Write about property..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three">Photo & Video Attachment</h4>
        <div className="dash-input-wrapper mb-20">
          <label htmlFor="">File Attachment*</label>

          <div className="attached-file d-flex align-items-center justify-content-between mb-15">
            <span>PorpertyImage_01.jpg</span>
            <a href="#" className="remove-btn">
              <i className="bi bi-x"></i>
            </a>
          </div>
          <div className="attached-file d-flex align-items-center justify-content-between mb-15">
            <span>PorpertyImage_02.jpg</span>
            <a href="#" className="remove-btn">
              <i className="bi bi-x"></i>
            </a>
          </div>
        </div>
        <div className="dash-btn-one d-inline-block position-relative me-3">
          <i className="bi bi-plus"></i>
          Upload File
          <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
        </div>
        <small>Upload file .jpg, .png, .mp4</small>
      </div>

      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three m0 pb-5">Select Amenities</h4>
        <ul className="style-none d-flex flex-wrap filter-input">
          <li>
            <input type="checkbox" name="Amenities" value="01" />
            <label>A/C & Heating</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="02" placeholder="" />
            <label>Garages</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="03" />
            <label>Swimming Pool</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="04" />
            <label>Parking</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="05" />
            <label>Lake View</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="06" />
            <label>Garden</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="07" />
            <label>Disabled Access</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="08" />
            <label>Pet Friendly</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="09" />
            <label>Ceiling Height</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="10" />
            <label>Outdoor Shower</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="11" />
            <label>Refrigerator</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="12" />
            <label>Fireplace</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="13" />
            <label>Wifi</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="14" />
            <label>TV Cable</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="15" />
            <label>Barbeque</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="16" />
            <label>Laundry</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="17" />
            <label>Dryer</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="18" />
            <label>Lawn</label>
          </li>
          <li>
            <input type="checkbox" name="Amenities" value="19" />
            <label>Elevator</label>
          </li>
        </ul>
      </div>

      <div className="bg-white card-box border-20 mt-40">
        <h4 className="dash-title-three">Address & Location</h4>
        <div className="row">
          <div className="col-12">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Address*</label>
              <input type="text" placeholder="145/A, Ranchview" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Country*</label>
              <select className="nice-select">
                <option value="0">Select Country</option>
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
          <div className="col-lg-4">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">City*</label>
              <select className="nice-select">
                <option value="0">Select City</option>
                <option>Dhaka</option>
                <option>Tokyo</option>
                <option>Delhi</option>
                <option>Shanghai</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">State*</label>
              <select className="nice-select">
                <option value="0">Select State</option>
                <option>Dhaka</option>
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
          Submit Property
        </a>
        <a href="#" className="dash-cancel-btn tran3s">
          Cancel
        </a>
      </div>
    </>
  );
};

export default AddProperty;
