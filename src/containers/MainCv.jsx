import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import YouthCulCenter from "../components/Projects/University/YouthCulCenter";
import ResidentialComplex from "../components/Projects/University/ResidentialComplex";
import FourStarHotel from "../components/Projects/University/FourStarHotel";
import BalkhastHouse from "../components/Projects/Research/BalkhastHouse";
import FiveRenov from "../components/Projects/Research/FiveRenov";
import SusRuralDev from "../components/Projects/Research/SusRuralDev";
import Drawings from "../components/Projects/Fun/Drawings";
import Sketches from "../components/Projects/Fun/Sketches";
import SoftwarePrac from "../components/Projects/Fun/SoftwarePrac";

const MainCv = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route
          path="/projects/fun/software-practice"
          component={SoftwarePrac}
        />
        <Route path="/projects/fun/sketches" component={Sketches} />
        <Route path="/projects/fun/drawings" component={Drawings} />

        <Route
          path="/projects/research/sustainable-rural-development"
          component={SusRuralDev}
        />
        <Route
          path="/projects/research/five-renovation-projects"
          component={FiveRenov}
        />
        <Route
          path="/projects/research/balkhast-house"
          component={BalkhastHouse}
        />

        <Route
          path="/projects/university/four-star-hotel"
          component={FourStarHotel}
        />
        <Route
          path="/projects/university/residential-complex"
          component={ResidentialComplex}
        />
        <Route
          path="/projects/university/youth-cultural-center"
          component={YouthCulCenter}
        />

        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </MainLayout>
  );
};

export default MainCv;
