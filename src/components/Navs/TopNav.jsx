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
                className="nav-link "
                aria-current="page"
                to="/"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="fa fa-home p-2"></i>
                Home
              </NavLink>{" "}
            </li>
            <li className="nav-item dropdown p-2">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-laptop p-2"></i>
                Projects
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/projects" exact>
                    All Projects
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/youth-cultural-center"
                  >
                    <i class="fa fa-bank"></i>
                    &#160;Youth Cultural Center
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/residential-complex"
                  >
                    <i class="fa fa-bank"></i>
                    &#160;Residential Complex
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/university/four-star-hotel"
                  >
                    <i class="fa fa-bank"></i>
                    &#160;Four Star Hotel
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/balkhast-house"
                  >
                    <i class="fa fa-search"></i>
                    &#160;Balkhast House
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/five-renovation-projects"
                  >
                    <i class="fa fa-search"></i>
                    &#160;Five Renovation Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/research/sustainable-rural-development"
                  >
                    <i class="fa fa-search"></i>
                    &#160;Sustainable Rural Development
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/drawings"
                  >
                    <i class="fa fa-puzzle-piece"></i>
                    &#160;Drawings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/sketches"
                  >
                    <i class="fa fa-puzzle-piece"></i>
                    &#160;Sketches
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/projects/fun/software-practice"
                  >
                    <i class="fa fa-puzzle-piece"></i>
                    &#160;Software Practice
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className="nav-link"
                to="/about"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="fa fa-info p-2"></i>
                About Me
              </NavLink>{" "}
            </li>
            <li className="nav-item p-2">
              <NavLink
                className="nav-link"
                to="/contact"
                exact
                activeStyle={{ color: "pink" }}
              >
                <i class="fa fa-phone p-2"></i>
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
