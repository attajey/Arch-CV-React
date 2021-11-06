import React, { Fragment } from "react";

const FiveRenov = () => {
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Five Successful Renovation Projects</h1>
      </div>
      <div className="container pb-5 text-center">
        <div className="row pb-1">
          <p>
            In this research, five antique buildings, including one domestic and
            four international that were renovated in the recent decades, were
            chosen. In all these renovations, an adjunct space was added, in
            order to improve the quality and functionality of these buildings. 
            Many books and researches were studied to get acquainted with the
            ideas, concepts, reasons and burdens of these renovation projects. 
          </p>
          <hr />
        </div>
        <div className="row pb-5 fs-4 fa fa-download">
          <a
            href="../../images/Projects/Researches/RESEARCH ON FIVE SUCCESSFUL RENOVATION PROJECTS .pdf"
            target="__blank"
            download
          >
            Download This Document !
          </a>
        </div>
        <div className="row">
          <object
            data="../../images/Projects/Researches/RESEARCH ON FIVE SUCCESSFUL RENOVATION PROJECTS .pdf"
            type="application/pdf"
          >
            <p>
              Your web browser doesn't have a PDF plugin. Instead you can{" "}
              <a href="../../images/Projects/Researches/RESEARCH ON FIVE SUCCESSFUL RENOVATION PROJECTS .pdf">
                click here to download the PDF file.
              </a>
            </p>
          </object>
        </div>
      </div>
    </Fragment>
  );
};

export default FiveRenov;
