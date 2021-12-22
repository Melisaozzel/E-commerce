import React from "react";
import { MdPerson, MdShoppingCart, MdOutlineSearch } from "react-icons/md";
import WomenScreen from "./WomenScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";

import "./LoginScreen.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;
const LoginScreen = () => {
  return (
    <div className="Loginbody">
      <header className="header trans_300">
        <div className="main_nav_container">
          <div className="container">
            <div className="row">
              <div className="container-fluid">
                <div className="logo_container" style={{ marginLeft: "50px" }}>
                  <a href="#">
                    MEHA <span> Shop</span>
                  </a>
                </div>
                <div className="row" style={{ marginLeft: "850px" }}>
                  <div className="col-md-6">
                    <ul className="navbar_menu">
                      <Link to="/">
                        <a href="#">HOME</a>
                      </Link>
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
        style={{ backgroundImage: "url(images/slider_1.jpg)" }}
      >
        <div className="Login">
          <div class="center">
            <h1>Login </h1>
            <form method="post" />
            <div class="txt_field">
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                required
              />
            </div>
            <div class="txt_field">
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>

            <input className="button" type="submit" value="Login" />
            <div class="signup_link">
              Not a member? <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
