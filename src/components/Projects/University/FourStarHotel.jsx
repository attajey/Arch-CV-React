import React, { Fragment } from "react";
import Zoom from "react-medium-image-zoom";

const FourStarHotel = () => {
  document.title = "Four Star Hotel Design";
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Four-Star Hotel Design</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 ">
            <Zoom>
              <img
                className="img-project-main"
                src="../../images/Projects/University Projects/3-four star hotel.jpg"
                alt="Four Star Hotel"
              />
            </Zoom>
          </div>
        </div>
      </div>
      <div className="container px-2 py-3">
        <hr />
        <h2 className="text-center text-uppercase pb-3">Image Gallery</h2>
        <div
          className="row d-flex flex-wrap align-items-center "
          data-bs-toggle="modal"
          data-bs-target="#lightbox"
        >
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-1-Description.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="0"
              alt="Description"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-2-Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="1"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-3-Design Process.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="2"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-4-Site Plan.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="3"
              alt="Site Plan"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-5-Basement -2, -1 Floor Plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="4"
              alt="Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-6-Ground + First Floor Plan.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="5"
              alt="Ground + First Floor Plan"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-7-Second + Third Floor Plan.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="6"
              alt="Second + Third Floor Plan"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-8-Elevation-Section.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="7"
              alt="Elevation Section"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-9-3D.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="8"
              alt="3D"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/4 Star Hotel/3-10-3D.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="9"
              alt="3D"
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
              <div className="container bg-dark">
                <div className="row align-self-center">
                  <div className="col-2 text-start pt-2">
                    <button
                      type="button"
                      className="m-0 p-0 border-0 bg-transparent"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-times-circle fa-2x text-white"></i>
                      </span>
                    </button>
                  </div>
                  <div className="col-8 text-center p-2 ">
                    <span>Click on the picture to zoom in</span>
                  </div>
                  <div className="col-2"></div>
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
                </ol>
                <div className="carousel-inner" id="carousel-inner-id">
                  <div className="carousel-item active" id="carousel-images">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects//4 Star Hotel/3-1-Description.jpg"
                        alt="Description"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-2-Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-3-Design Process.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-4-Site Plan.jpg"
                        alt="Site Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-5-Basement -2, -1 Floor Plans.jpg"
                        alt="Basement + Floor Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-6-Ground + First Floor Plan.jpg"
                        alt="Ground + First Floor Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-7-Second + Third Floor Plan.jpg"
                        alt="Second + Third Floor Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-8-Elevation-Section.jpg"
                        alt="Elevation Section"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-9-3D.jpg"
                        alt="3D"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/4 Star Hotel/3-10-3D.jpg"
                        alt="3D"
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

      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <video className="img-projects" controls>
              <source
                src="../../images/Projects/University Projects/4 Star Hotel/3-11-Animation.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FourStarHotel;
