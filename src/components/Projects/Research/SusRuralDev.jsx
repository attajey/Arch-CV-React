import React, { Fragment } from "react";

const SusRuralDev = () => {
  document.title = "Sustainable Rural Development";
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Sustainable Rural Development</h1>
      </div>
      <div className="container pb-5 text-center">
        <div className="row pb-1">
          <p>
            This research was focused on studying different rural houses of
            distinct climates in Iran, in order to achieve unique patterns for
            building sustainable rural houses, by using local materials and
            resources and minimizing the energy consumption in different
            climates.  Many books and researches were studied and summarized.
            Unfortunately, the program was delayed due to my research
            supervisor’s busy schedule.
          </p>
          <hr />
        </div>
        <div className="row pb-5 fs-4 fa fa-download">
          <a
            href="./image/Projects/Researches/Sustainable Rural Development.pdf"
            target="__blank"
            download
          >
            Download This Document
          </a>
        </div>
        <div className="row">
          <object
            data="../../images/Projects/Researches/Sustainable Rural Development.pdf"
            type="application/pdf"
          >
            <p>
              Your web browser doesn't have a PDF plugin. Instead you can{" "}
              <a href="../../images/Projects/Researches/Sustainable Rural Development.pdf">
                click here to download the PDF file.
              </a>
            </p>
          </object>
        </div>
      </div>
    </Fragment>
  );
};

export default SusRuralDev;
