import React from 'react';
import '../style.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src='https://assets.ajio.com/static/img/Ajio-Logo.svg' width={'130px'} alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Men</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Kids</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/product">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Home and kitchen</a>
          </li>
        </ul>
      </div>
      {/* <div className="guest-header">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <button className="btn btn-link">Sign in/join AJIO</button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-link">Customer Care</button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-link">visit AJIOLUXE</button>
            </li>
          </ul>
        </div> */}
    </div>
  </nav>


  );
};
export default Header;

