import React, { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <div className="container-fluid text-center py-5">
        <div className="row">
          <i class="zmdi zmdi-laptop-mac"></i>
          <h2>University Projects</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/University Projects/1-youth cultural center.jpg"
              alt="youth Cultural Center Project"
            />
            <div className="middle">
              <h4>Youth Cultural Center</h4>
              <a href="./youth-cultural-center.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/University Projects/2-resdential complex2.jpg"
              alt="Residential Complex Project"
            />
            <div className="middle">
              <h4>Residential Complex</h4>
              <a href="./residential-complex.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/University Projects/3-four star hotel.jpg"
              alt="Four Star Hotel Project"
            />
            <div className="middle">
              <h4>Four Star Hotel</h4>
              <a href="./four-star-hotel.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <i class="zmdi zmdi-search"></i>

          <h2>Researches</h2>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Researches/1-BALKHAST HOUSE_.jpg"
              alt="Balkhast House Research"
            />
            <div className="middle">
              <h4>Balkhast House</h4>
              <a href="./balkhast-house.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Researches/2-FIVE RENOVATION PROJECTS_.jpg"
              alt="Five Successful Renovation Projects"
            />
            <div className="middle">
              <h4>Five Successful Renovation Projects</h4>
              <a
                href="./five-successful-renovation-projects.html"
                target="__blank"
              >
                Click For Details
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Researches/3-Sustainable Rural Development.jpg"
              alt="Sustainable Rural Development Research"
            />
            <div className="middle">
              <h4>Sustainable Rural Development</h4>
              <a href="./sustainable-rural-development.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row ">
          <i class="zmdi zmdi-puzzle-piece"></i>

          <h2>For Fun</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Just For Fun/Drawings/Drawing.jpg"
              alt="Drawings"
            />
            <div className="middle">
              <h4>Drawings</h4>
              <a href="./drawings.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Just For Fun/Sketches/Sketch.jpg"
              alt="Sketches"
            />
            <div className="middle">
              <h4>Sketches</h4>
              <a href="./sketches.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 projects-items">
            <img
              className="img-projects"
              src="./images/Projects/Just For Fun/Software Practice/SOFTWARE 1.jpg"
              alt="Sketches"
            />
            <div className="middle">
              <h4>Software Practice</h4>
              <a href="./software-practice.html" target="__blank">
                Click For Details
              </a>
            </div>
          </div>
          <hr className="mt-3" />
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
