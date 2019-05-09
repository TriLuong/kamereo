import React from "react";
import Popup from "reactjs-popup";
import EditStoreInfoContainer from "./EditStoreInfo/EditStoreInfo.container";

function StoreInfo(props) {
  console.log(props);
  return (
    <>
      <h1>Store Infomation</h1>

      <div className="row">
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 store-info">
          <img src="#" className="img-responsive" alt="Avatar" />
          <p>STORE INFO</p>
          <ul>
            <li>
              Name
              <p>{props.storeInfo && props.storeInfo.storeInfo}</p>
            </li>
            <li>
              Address
              <p>{props.storeInfo && props.storeInfo.storeAddress}</p>
            </li>
            <li>
              Phone number
              <p>{props.storeInfo && props.storeInfo.phoneNumber}</p>
            </li>
          </ul>
          <p>RED INVOICE INFO</p>
          <ul>
            <li>
              Company Name
              <p>{props.storeInfo && props.storeInfo.companyName}</p>
            </li>
            <li>
              Address
              <p>{props.storeInfo && props.storeInfo.companyAddress}</p>
            </li>
            <li>
              Tax Number
              <p>{props.storeInfo && props.storeInfo.taxNumber}</p>
            </li>
          </ul>
          <Popup
            trigger={
              <button
                type="button"
                className="btn btn-success"
                style={{ marginBottom: "1em" }}
              >
                Edit Profile
              </button>
            }
            modal
            closeOnDocumentClick
          >
            <EditStoreInfoContainer />
          </Popup>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 delivery-message">
          <p>DELIVERY DEFAULT MESSAGE</p>
        </div>
      </div>
    </>
  );
}

export default StoreInfo;
