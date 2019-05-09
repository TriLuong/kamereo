import React, { useState } from "react";

function EditStoreInfo(props) {
  const [storeProfile, setStoreProfile] = useState({
    storeInfo: null,
    storeAddress: null,
    phoneNumber: null,
    companyName: null,
    companyAddress: null,
    taxNumber: null
  });

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setStoreProfile({ ...storeProfile, [name]: value });
    // console.log(storeProfile);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.setStoreInfo(storeProfile);
    console.log(storeProfile);
  };

  return (
    <>
      <div className="container-fuild">
        <span style={{ display: "inline-flex" }}>
          <i className="fas fa-pencil-alt" />
          <p style={{ paddingLeft: "1em" }}>Edit Store Infomation</p>
        </span>
        <hr />

        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 store-info">
            <p>STORE IMAGE</p>
            <img
              src="#"
              className="img-responsive"
              alt="Avatar"
              style={{ display: "block" }}
            />

            <button type="button" className="btn btn-danger">
              Remove
            </button>

            <button type="button" className="btn btn-primary">
              Upload Image
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 delivery-message">
            <p>BASIC INFO</p>
            <form onSubmit={onSubmit}>
              <label style={{ display: "block" }}>Store info</label>
              <input
                placeholder="Store info"
                name="storeInfo"
                onChange={onChange}
              />
              <label style={{ display: "block" }}>Store address</label>
              <input
                placeholder="Store address"
                name="storeAddress"
                onChange={onChange}
              />
              <label style={{ display: "block" }}>Phone number</label>
              <input
                placeholder="Phone number"
                name="phoneNumber"
                onChange={onChange}
              />

              <p>READ INVOICE INFO</p>
              <label style={{ display: "block" }}>Company name</label>
              <input
                placeholder="Company name"
                name="companyName"
                onChange={onChange}
              />
              <label style={{ display: "block" }}>Company address</label>
              <input
                placeholder="Company address"
                name="companyAddress"
                onChange={onChange}
              />
              <label style={{ display: "block" }}>Tax number</label>
              <input
                placeholder="Tax number"
                name="taxNumber"
                onChange={onChange}
              />

              <div style={{ paddingTop: "1em" }}>
                <button type="button" className="btn btn-info" type="submit">
                  Save
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStoreInfo;
