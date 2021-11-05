import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Kimia K
        </NavLink>
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item p-2">
              <NavLink
                classNameName="nav-link "
                aria-current="page"
                to="/"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="zmdi zmdi-home p-2"></i>
                Home
              </NavLink>{" "}
            </li>
            <li className="nav-item dropdown px-2">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="zmdi zmdi-laptop p-2"></i>
                Projects
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/projects">
                    All Projects
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item p-2">
              <NavLink
                classNameName="nav-link"
                to="/about"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="zmdi zmdi-info p-2"></i>
                About Me
              </NavLink>{" "}
            </li>
            <li className="nav-item p-2">
              <NavLink
                classNameName="nav-link"
                to="/contact"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="zmdi zmdi-phone-in-talk p-2"></i>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
