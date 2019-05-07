import React, { useState } from "react";
import "./Home.css";
import StoreInfo from "../../components/StoreInfo";

function Home() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
    console.log(isShowMenu);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 header-menu">
            <a href="#" onClick={showMenu}>
              {isShowMenu ? (
                <i className="fas fa-times" />
              ) : (
                <i className="fas fa-bars" />
              )}
            </a>
            <a href="#"> KAMEREO </a>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 header-menu">
            <div className="header-left">
              <ul>
                <li>
                  <a href="#">
                    <i className="far fa-envelope" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-shopping-cart" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-language" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-user" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          {isShowMenu ? (
            <>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 menu-show">
                <ul>
                  <li>
                    <a href="#">
                      <i className="far fa-user" />
                      &nbsp;Account
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-heart" />
                      &nbsp;Favorite Items
                    </a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                    <ul>
                      <li>
                        <i className="fas fa-tachometer-alt" />
                        &nbsp; <a href="#">Overview</a>
                      </li>
                      <li>
                        <i className="far fa-list-alt" />
                        &nbsp;
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <i className="fas fa-truck" />
                        &nbsp;
                        <a href="#">Supplier List</a>
                      </li>
                      <li>
                        <i className="far fa-chart-bar" />
                        &nbsp;
                        <a href="#">Statistic</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Market Place</a>
                    <ul>
                      <li>
                        <i className="fas fa-store" />
                        &nbsp;
                        <a href="#">Market</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">General Setting</a>
                    <ul>
                      <li>
                        <i className="far fa-building" />
                        &nbsp;
                        <a href="#">Company Info</a>
                      </li>
                      <li>
                        <i className="fas fa-utensils" />
                        &nbsp;
                        <a href="#">Store Info</a>
                      </li>
                      <li>
                        <i className="fas fa-users" />
                        &nbsp;
                        <a href="#">User Management</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 content">
                <StoreInfo />
              </div>
            </>
          ) : (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content">
              <StoreInfo />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
