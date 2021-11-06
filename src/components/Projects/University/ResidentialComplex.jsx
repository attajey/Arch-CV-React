import React, { Fragment } from "react";
import Zoom from "react-medium-image-zoom";

const ResidentialComplex = () => {
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Residential Complex</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <img
              className="img-project-main"
              src="../../images/Projects/University Projects/2-resdential complex2.jpg"
              alt="Residential Complex"
            />
          </div>
        </div>
      </div>
      <div className="container px-5 py-3">
        <hr />
        <h2 className="text-center pb-3">Image Gallery</h2>
        <div
          className="row d-flex flex-wrap align-items-center "
          data-bs-toggle="modal"
          data-bs-target="#lightbox"
        >
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-1-Description.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="0"
              alt="Description"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-2-Design Proces.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="1"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-3-Design Proces.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="2"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-4-Design Proces.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="3"
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-5-Site Plan.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="4"
              alt="Site Plan"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-6-Unit Type one Floor Plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="5"
              alt="Unit Type One Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-7-Unit Type Two Floor Plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="6"
              alt="Unit Type Two Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-8-Unit Type Three Floor Plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="7"
              alt="Unit Type Three Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-9-Unit Type Four Floor Plans.jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="8"
              alt="Unit Type Four Floor Plans"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-11-3D (Chosen Area).jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="9"
              alt="3D ( Chosen Area )"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-12-3D (Chosen Area).jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="10"
              alt="3D ( Chosen Area )"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <img
              className="img-projects"
              src="../../images/Projects/University Projects/Residential Complex/2-13-3D View (Chosen Area).jpg"
              data-bs-target="#indicators"
              data-bs-slide-to="11"
              alt="3D View ( Chosen Area )"
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
                      <i className="fa fa-times-circle fa-2x "></i>
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
                </ol>
                <div className="carousel-inner" id="carousel-inner-id">
                  <div className="carousel-item active" id="carousel-images">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-1-Description.jpg"
                        alt="Description"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-2-Design Proces.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-3-Design Proces.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-4-Design Proces.jpg"
                        alt="Design Process"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-5-Site Plan.jpg"
                        alt="Site Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-6-Unit Type one Floor Plans.jpg"
                        alt="Unit Type One Floor Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-7-Unit Type Two Floor Plans.jpg"
                        alt="Unit Type Two Floor Plan"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-8-Unit Type Three Floor Plans.jpg"
                        alt="Unit Type Three Floor Plans"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-9-Unit Type Four Floor Plans.jpg"
                        alt="Unit Type Four Floor Plans"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-11-3D (Chosen Area).jpg"
                        alt="3D Chosen Area"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-12-3D (Chosen Area).jpg"
                        alt="3D Chosen Area"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/University Projects/Residential Complex/2-13-3D View (Chosen Area).jpg"
                        alt="3D View Chose Area"
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
                    <i className="fa fa-arrow-circle-left fa-2x"></i>
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
                    <i className="fa fa-arrow-circle-right fa-2x"></i>
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

export default ResidentialComplex;
