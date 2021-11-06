import React, { Fragment } from "react";
import Typer from "react-animated-typer";
const Home = () => {
  return (
    <Fragment>
      <section className="row text-center">
        <div className="col-12 p-0">
          <h1 className="pt-5">WELCOME</h1>
          <h3>
            <div className="pt-3">
              <Typer
                dataText={[
                  "I'm Kimia Karimi",
                  "An Architect",
                  "Checkout My Projects",
                ]}
              />
            </div>
          </h3>
          <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-8">
              <p className="pt-5 px-3 lh-lg">
                A fresh graduate, a highly organized and efficient individual
                and group member, an art enthusiastic, a curios student who is
                eager to learn with hopes of using sustainable design as a way
                to reduce the climate change.
              </p>
            </div>
            <div className="col-12 col-md-2"></div>
            <div className="row">
              <div className="col-12 text-center">
                <a className="" href="./projects.html">
                  <button type="button" className="btn btn-dark mb-5">
                    Checkout My Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row text-center">
        <div className="col-12 ">
          <img className="img-fluid" src="images/gif.gif" alt="Architect Gif" />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
