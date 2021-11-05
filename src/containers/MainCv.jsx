import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const MainCv = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
      </Switch>
    </MainLayout>
  );
};

export default MainCv;
