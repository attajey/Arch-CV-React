import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Projects = () => {
  return (
    <Fragment>
      <div className="container-fluid text-center py-5">
        <div className="row">
          <i class="fa fa-bank fa-3x pb-4"></i>
          <h2>University Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/University Projects/1-youth cultural center.jpg"
              alt="youth Cultural Center Project"
            />
            <div className="middle">
              <h4>Youth Cultural Center</h4>
              <NavLink to="/projects/university/youth-cultural-center">
                Click For Details
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/University Projects/2-resdential complex2.jpg"
              alt="Residential Complex Project"
            />
            <div className="middle">
              <h4>Residential Complex</h4>
              <NavLink to="/projects/university/residential-complex">
                Click For Details
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/University Projects/3-four star hotel.jpg"
              alt="Four Star Hotel Project"
            />
            <div className="middle">
              <h4>Four Star Hotel</h4>
              <NavLink to="/projects/university/four-star-hotel">
                Click For Details
              </NavLink>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <i class="fa fa-search fa-3x pb-4"></i>
          <h2>Researches</h2>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Researches/1-BALKHAST HOUSE_.jpg"
              alt="Balkhast House Research"
            />
            <div className="middle">
              <h4>Balkhast House</h4>
              <NavLink to="/projects/research/balkhast-house">
                Click For Details
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Researches/2-FIVE RENOVATION PROJECTS_.jpg"
              alt="Five Successful Renovation Projects"
            />
            <div className="middle">
              <h4>Five Successful Renovation Projects</h4>
              <NavLink to="/projects/research/five-renovation-projects">
                Click For Details
              </NavLink>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Researches/3-Sustainable Rural Development.jpg"
              alt="Sustainable Rural Development Research"
            />
            <div className="middle">
              <h4>Sustainable Rural Development</h4>
              <NavLink to="/projects/research/sustainable-rural-development">
                Click For Details
              </NavLink>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <i class="fa fa-puzzle-piece fa-3x pb-4"></i>

          <h2>For Fun</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Just For Fun/Drawings/Drawing.jpg"
              alt="Drawings"
            />
            <div className="middle">
              <h4>Drawings</h4>
              <NavLink to="/projects/fun/drawings">Click For Details</NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Just For Fun/Sketches/Sketch.jpg"
              alt="Sketches"
            />
            <div className="middle">
              <h4>Sketches</h4>
              <NavLink to="/projects/fun/sketches">Click For Details</NavLink>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects-present"
              src="./images/Projects/Just For Fun/Software Practice/SOFTWARE 1.jpg"
              alt="Sketches"
            />
            <div className="middle">
              <h4>Software Practice</h4>
              <NavLink to="/projects/fun/software-practice">
                Click For Details
              </NavLink>
            </div>
          </div>
          <hr className="mt-3" />
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
