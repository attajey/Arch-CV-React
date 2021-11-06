import React, { Fragment } from "react";
import Zoom from "react-medium-image-zoom";
const YouthCulCenter = () => {
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Youth Cultural Center</h1>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <Zoom>
            <img
              className="img-project-main"
              src="../../images/Projects/University Projects/1-youth cultural center.jpg"
              alt="Youth Cultural Center"
            />
          </Zoom>
        </div>
      </div>
      <div className="container px-2 py-3">
        <hr />
        <h2 className="text-center text-uppercase pb-3">Images Gallery</h2>
        <div
          className="row d-flex flex-wrap align-items-center px-2 "
          data-bs-toggle="modal"
          data-bs-target="#lightbox"
        >
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-1 Description.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="0"
              alt="Description"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-2 Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="1"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-3 Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="2"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-4 Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="3"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-5 Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="4"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-6 Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="5"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-7 Site Plan.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="6"
              alt="Site Plan"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-8 Ground Floor+ First Floor plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="7"
              alt="Ground Floor + First Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-9 Basement +Roof plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="8"
              alt="Basement + Roof Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-10 Elevations +Sections.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="9"
              alt="Elevations + Sections"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-11 Phase two.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="10"
              alt="Phase Two"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-12 Phase two.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="11"
              alt="Phase Two"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-13 3D Design.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="12"
              alt="3D Design"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Youth Cultural Center/1-14 3D Design.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="13"
              alt="3D Design"
            />
          </div>
        </div>
        <div
          className="modal fade"
          id="lightbox"
          role="dialog"
          tabindex="-1"
          data-bs-keyboard="true"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="row align-self-center">
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-dark text-right m-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-times-circle fa-2x close-icon"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div
                id="indicators"
                className="carousel slide"
                data-bs-interval="false"
                data-bs-keyboard="true"
              >
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#indicators"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="2"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="3"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="4"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="5"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="6"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="7"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="8"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="9"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="10"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="11"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="12"></li>
                  <li data-bs-target="#indicators" data-bs-slide-to="13"></li>
                </ol>
                <div className="carousel-inner" id="carousel-inner-id">
                  <div
                    className="carousel-item active"
                    id="carousel-../../images/"
                  >
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-1 Description.jpg"
                        alt="Description"
                      />
                    </Zoom>
                  </div>

                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-2 Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-3 Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-4 Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-5 Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-6 Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      ≈
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-7 Site Plan.jpg"
                        alt="Site Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-8 Ground Floor+ First Floor plans.jpg"
                        alt="Ground Floor + First Floor Plans"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-9 Basement +Roof plans.jpg"
                        alt="Basement + Roof Plans"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-10 Elevations +Sections.jpg"
                        alt="Elevetions + Sections"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-11 Phase two.jpg"
                        alt="Phase Two"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-12 Phase two.jpg"
                        alt="Phase Two"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Youth Cultural Center/1-13 3D Design.jpg"
                        alt="3D Design"
                      />
                    </Zoom>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#indicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-arrow-circle-left fa-2x next-prev-icon"></i>
                  </span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#indicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-arrow-circle-right fa-2x next-prev-icon"></i>
                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default YouthCulCenter;
