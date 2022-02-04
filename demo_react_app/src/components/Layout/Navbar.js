import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
      <div className="contaier">
        
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
     
          <a className="navbar-brand" to="/"> {props.title}</a>
          {/*  <a> to Link  and href = to */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to={"/"}>
                  {/* NavLink is use to show current page hilight */}
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/About"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/Form"}>
                  Form
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/AllUserDetails">
                      All User Details
                             
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/UserDetails">
                    User Details
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      
    </nav>
      </div>
     
  );
};

export default Navbar;
