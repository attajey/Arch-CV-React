import React, { Fragment } from "react";
import Zoom from "react-medium-image-zoom";

const Sketches = () => {
  document.title = "Sketches";
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>My Sketches</h1>
      </div>
      <div className="container px-2 py-3">
        <hr />
        <div
          className="row d-flex flex-wrap align-items-center text-center"
          data-bs-toggle="modal"
          data-bs-target="#lightbox"
        >
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 1.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="0"
              alt="Sketch 1"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 2.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="1"
              alt="Sketch 2"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 3.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="2"
              alt="Sketch 3"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 4.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="3"
              alt="Sketch 4"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 5.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="4"
              alt="Sketch 5"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 p-2">
            <img
              className="img-drawing"
              src="../../images/Projects/Just For Fun/Sketches/Sketch 6.JPG"
              data-bs-target="#indicators"
              data-bs-slide-to="5"
              alt="Sketch 6"
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
                      <i className="fa fa-times-circle fa-2x"></i>
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
                </ol>
                <div className="carousel-inner" id="carousel-inner-id">
                  <div className="carousel-item active" id="carousel-images">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 1.JPG"
                        alt="Sketch 1"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 2.JPG"
                        alt="Sketch 2"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 3.JPG"
                        alt="Sketch 3"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 4.JPG"
                        alt="Sketch 4"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 5.JPG"
                        alt="Sketch 5"
                      />
                    </Zoom>
                  </div>
                  <div className="carousel-item">
                    <Zoom>
                      <img
                        className="img-fluid"
                        src="../../images/Projects/Just For Fun/Sketches/Sketch 6.JPG"
                        alt="Sketch 6"
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

export default Sketches;
