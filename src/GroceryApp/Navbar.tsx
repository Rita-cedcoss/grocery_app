import React from "react";
import { Link } from "react-router-dom";
type ProdData = {
  _id: string;
  quantity: number;
  calPrice: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  expDate: string;
  mfdDate: string;
  size: string;
  price: number;
  stock: string;
  images: string[];
  suggestion: string[];
  allegations: string[];
};
type cartProps = {
  cartarr: ProdData[];
};
const Navbar = (props: cartProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="dfgdf">
            <Link to="/home">
              <img
                className="logo"
                alt=""
                src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg"
              />
            </Link>
          </a>
          <select
            className="form-select form-select-lg mb-3 border-0 bg-success text-light mt-2 "
            aria-label=".form-select-lg example"
          >
            <option selected>Shop By Categories</option>
          </select>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse grow" id="navbarNav">
          <ul className="navbar-nav fs-5 align-items-center">
            <li className="nav-item me-2">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span className="input-group-text bg-light borer-0">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="#">
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ fontSize: "30px", color: "#147618" }}
                ></i>
                <span className="fontsm">Collect From Store</span>
                <p className="fontmd ms-3">Spectrum Mall Noida</p>
              </a>
            </li>
            <li className="nav-item ">
            </li>
            <li className="nav-item me-5">
              <Link to="/cart">
                <i
                  className="bi bi-chevron-down"
                  style={{ fontSize: "20px", color: "#147618" }}
                ></i>
                <i
                  className="bi bi-cart3"
                  style={{ fontSize: "30px", color: "#147618" }}
                ></i>
                <span className="fontmd">My Cart</span>
                <p className="fontmd ms-5 text-danger">
                  Items {props.cartarr.length}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
