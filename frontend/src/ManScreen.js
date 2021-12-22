import "./WomenScreen.css";
import "./Home.css";

import Data from "./Data";
import Product from "./Product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdPerson, MdShoppingCart, MdOutlineSearch } from "react-icons/md";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;
const ManScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fecthData();
  }, []);

  return (
    <div className="WomenDiv">
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
      <div className="flex-container">
        {products.map((product) => {
          if (product._id > 9 && product._id <= 18)
            return <Product key={product._id} product={product}></Product>;
        })}
      </div>
    </div>
  );
};
export default ManScreen;
