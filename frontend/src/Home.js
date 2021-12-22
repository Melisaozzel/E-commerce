import React from "react";
import { MdPerson, MdShoppingCart, MdOutlineSearch } from "react-icons/md";
import "./Home.css";
import LoginScreen from "./LoginScreen";
import WomenScreen from "./WomenScreen";
import ManScreen from "./ManScreen";
import AccesoriesScreen from "./AccesoriesScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <body>
        <div className="super_container">
          <header className="header trans_300">
            <div className="main_nav_container">
              <div className="container">
                <div className="row">
                  <div className="container-fluid">
                    <div
                      className="logo_container"
                      style={{ marginLeft: "50px" }}
                    >
                      <a href="#">
                        MEHA <span> Shop</span>
                      </a>
                    </div>
                    <div className="row" style={{ marginLeft: "850px" }}>
                      <div className="col-md-6">
                        <ul className="navbar_menu">
                          <a href="#">HOME</a>
                          <a href="#">SHOP</a>
                          <a href="#">PROMOTION</a>
                          <a href="#">PAGES</a>
                          <a href="#">CONTACTS</a>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="navbar_user">
                          <li>
                            <a href="#">
                              <i className="fa fa-search">
                                <MdOutlineSearch />
                              </i>
                            </a>
                          </li>

                          <Link to="/LoginScreen">
                            <li>
                              <a href="#">
                                <i className="fa fa-search">
                                  <MdPerson />
                                </i>
                              </a>
                            </li>
                          </Link>
                          <li className="checkout">
                            <a href="#">
                              <i className="fa fa-shopping-cart">
                                <MdShoppingCart />
                              </i>
                              <span id="checkout_items" class="checkout_items">
                                2
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div
            className="main_slider"
            style={{ backgroundImage: "url(images/deneme1.jpg)" }}
          >
            <div className="container fill_hight">
              <div className="row align-items-center fill_hight">
                <div className="col">
                  <div
                    className="main_slider_content"
                    style={{ marginLeft: "50px" }}
                  >
                    <h6>Spring/Summer Collection 2021</h6>
                    <h1>Get up to</h1>
                    <br />
                    <h1>30% Off</h1>
                    <br />
                    <h1>New Arrivals</h1>

                    <div className="red_button shop_now_button">
                      <a href=" #">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="banner_item align-item-center"
                    style={{
                      backgroundImage: "url(images/banner_1.jpg)",
                    }}
                  >
                    <div className="banner_category">
                      <Link to="/Women">
                        <a href="#">Women</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="banner_item align-item-center"
                    style={{
                      backgroundImage: "url(images/banner_2.jpg)",
                    }}
                  >
                    <div className="banner_category">
                      <Link to="/Accesories">
                        <a href="#">Accesories</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="banner_item align-item-center"
                    style={{
                      backgroundImage: "url(images/banner_3.jpg)",
                    }}
                  >
                    <div className="banner_category">
                      <Link to="/Man">
                        <a href="#">Men</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
