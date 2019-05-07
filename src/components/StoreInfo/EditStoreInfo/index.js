import React from "react";

function EditStoreInfo() {
  return (
    <>
      <div className="container-fuild">
        <h1>Edit Store Infomation</h1>

        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 store-info">
            <img src="#" className="img-responsive" alt="Avatar" />
            <p>STORE INFO</p>
            <ul>
              <li>Name</li>
              <li>Address</li>
              <li>Phone number</li>
            </ul>
            <p>RED INVOICE INFO</p>
            <ul>
              <li>Company Name</li>
              <li>Address</li>
              <li>Tax Number</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 delivery-message">
            <p>DELIVERY DEFAULT MESSAGE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStoreInfo;
