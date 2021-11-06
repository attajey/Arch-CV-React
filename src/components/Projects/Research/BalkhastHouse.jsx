import React, { Fragment } from "react";

const BalkhastHouse = () => {
  document.title = "Balkhast House";
  return (
    <Fragment>
      <div className="row text-center p-4">
        <h1>Balkhast House</h1>
      </div>
      <div className="container pb-5 text-center">
        <div className="row pb-1">
          <p>
            In this research, we first chose an antique, non restored house,
            then we analyzed the history, plans, elevations, sections, social
            and cultural studies, parts in need of renovation, found innovative
            techniques that would not harm the building. Finally designed an
            adjunct space and changed its functionality in order to achieve
            prosperity and reviviscent. 
          </p>
          <hr />
        </div>
        <div className="row pb-5 fs-4 fa fa-download">
          <a
            href="../../images/Projects/Researches/BALKHAST HOUSE.pdf"
            target="__blank"
            download
          >
            Download This Document
          </a>
        </div>
        <div className="row">
          <object
            data="../../images/Projects/Researches/BALKHAST HOUSE.pdf"
            type="application/pdf"
          >
            <p>
              Your web browser doesn't have a PDF plugin. Instead you can{" "}
              <a href="../../images/Projects/Researches/BALKHAST HOUSE.pdf">
                click here to download the PDF file.
              </a>
            </p>
          </object>
        </div>
      </div>
    </Fragment>
  );
};

export default BalkhastHouse;
