import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import TopNav from "./../Navs/TopNav";
import Footer from "./../common/Footer";

const MainLayout = (props) => {
  return (
    <Fragment>
      <TopNav />

      <main className="background-gradient">
        <div className="container-fluid">{props.children}</div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default withRouter(MainLayout);
