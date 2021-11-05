import React, { Fragment } from "react";
import Typer from "react-animated-typer";
const Home = () => {
  return (
    <Fragment>
      <section className="row text-center">
        <div className="col-12">
          <h1 className="pt-5">WELCOME</h1>
          <h3>
            <Typer
              dataText={[
                "I'm Kimia Karimi",
                "An Architect",
                "Checkout My Projects",
              ]}
            />
          </h3>
          <p className="pt-5 px-1 lh-lg">
            A fresh graduate, a highly organized and efficient individual and
            group member, an art enthusiastic, a curios student who is eager to
            learn with hopes of using sustainable design as a way to reduce the
            climate change.{" "}
          </p>
        </div>
      </section>
      <section className="row text-center">
        <div className="col-12 ">
          <img className="img-fluid" src="images/gif.gif" alt="Architect Gif" />
        </div>
        <div className="col-12 pb-5">
          <a className="pb-5" href="./projects.html" target="_blank">
            <button type="button" className="btn btn-dark mb-5">
              Checkout My Projects
            </button>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
