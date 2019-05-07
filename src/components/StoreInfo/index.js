import React from "react";

function StoreInfo() {
  return (
    <>
      <h1>Store Infomation</h1>

      <div class="row">
        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 store-info">
          <img src="#" class="img-responsive" alt="Avatar" />
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
        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 delivery-message">
          <p>DELIVERY DEFAULT MESSAGE</p>
        </div>
      </div>
    </>
  );
}

export default StoreInfo;
