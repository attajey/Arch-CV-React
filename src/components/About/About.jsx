import React, { Fragment } from "react";
import Typer from "react-animated-typer";

const About = () => {
  return (
    <Fragment>
      <div className="col-12 text-center p-5">
        <h1>About Me</h1>
      </div>
      <div className="col-12 text-center">
        <img
          className="profile-pic"
          src="./images/My Profile Picture.jpg"
          alt="My Profile"
        />
        <div className="pt-4">
          <Typer dataText={[" C'est moi ! "]} />
        </div>
        <p className="p-4 fa fa-download fa-1x">
          &#160;&#160;Download
          <a
            className="text-info"
            href="./images/About me/KARIMI CV.pdf"
            target="__blank"
          >
            &#160;&#160;My CV
          </a>
          &#160;&#160;And
          <a
            className="text-info"
            href="./images/About me/Karimi Protfolio.pdf"
            target="__blank"
          >
            &#160;&#160;My Portfolio
          </a>
        </p>
      </div>
      <div className="row pt-5">
        <div className="col-12 px-5 fs-5">
          <div className="custom-media media pb-5">
            <i className="fa fa-graduation-cap fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Educations</h3>
              <p className="fs-6">2016-2021</p>
              <div className="d-flex flex-row">
                <i className="fa fa-dot-circle-o pt-1"></i>
                <h5 className="fw-bold ps-2">Bachelor of Architecture</h5>
              </div>
              <p className="fs-6 ps-4">&#160;2016-2021</p>
              <div className="d-flex flex-row ps-4">
                <i className="fa fa-circle pt-1"></i>
                <p className="ps-2">Islamic Azad University of Mashhad</p>
              </div>
              <p className="ps-5">Overall GPA 4.6/5 </p>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-briefcase fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Work Experiences</h3>
              <p className="fs-6">2019-2021</p>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">AutoCAD Drafter</h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Oct 2021 - Present</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">
                      Internship at Arian Engineering Group
                    </p>
                  </div>
                  <p className="ps-5">
                    An internship program in Arian Engineering Group, mainly
                    focused on Auto-cad drafting, Residential Design, etc.
                  </p>
                  <a
                    className="text-info"
                    href="An internship program in Arian Engineering Group, mainly focused on Auto-cad drafting, Residential 
                  Design, etc."
                  >
                    Visit Arian Eng. Gp. Page
                  </a>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">Research Assistant</h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Summer of 2019</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">
                      Internship at Islamic Azad University of Mashhad
                    </p>
                  </div>
                  <p className="ps-5">
                    Researched on sustainability of rural area's architecture
                    during 1930-1980, supervised by my university professor
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-gears fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Skills</h3>
              <div className="row pt-3 px-3">
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">AutoCAD</p>
                    <div className="wow pulse text-center clearfix">
                      <div className="c100 p80 small">
                        <span>80%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">&#160;Lumion</p>
                    <div className="wow pulse clearfix">
                      <div className="c100 p70 small">
                        <span>70%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">3ds Max</p>
                    <div className="wow pulse clearfix">
                      <div className="c100 p60 small">
                        <span>60%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">Drawing</p>
                    <div className="wow pulse clearfix">
                      <div className="c100 p60 small">
                        <span>60%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">&#160;&#160;&#160;Revit</p>
                    <div className="wow pulse clearfix">
                      <div className="c100 p50 small">
                        <span>50%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center flex-wrap">
                  <div className="row py-4">
                    <p className="fw-bold">Photoshop</p>
                    <div className="wow pulse clearfix">
                      <div className="c100 p60 small">
                        <span>60%</span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-star fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Certificates</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">IELTS</h5>
                  </div>
                  <p className="fs-6 ps-4">
                    &#160;Issued Nov 2019 - Expires Nov 2021
                  </p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">IRSAFAM Institute</p>
                  </div>
                  <p className="ps-5">
                    Holder of IIELTS degree with overall band score of{" "}
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="./images/About me/IELTS.jpg"
                  >
                    See credential
                  </a>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">
                      Architecture Group Exhibition
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Issued Jul 2018</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Setavin Art And Architecture Network</p>
                  </div>
                  <p className="ps-5">
                    Member of the Spatial Organization Strategy Architecture
                    group exhibition{" "}
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="https://setavin.com/Kimia_Karimi"
                  >
                    See credential
                  </a>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">
                      Architecture Design Process Workshop
                    </h5>
                  </div>
                  <p className="fs-6 ps-4">&#160;Issued Sep 2017</p>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Setavin Art And Architecture Network</p>
                  </div>
                  <p className="ps-5">
                    Discussed topics in these workshops were design processes,
                    Origami in Architecture, Architectural Competitions, etc.
                  </p>
                  <a
                    className="ps-5 text-info"
                    target="”_blank”"
                    href="./images/About me/Architectural Workshops.pdf"
                  >
                    See credential
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-language fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Languages</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">Persian</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Native or bilingual proficiency</p>
                  </div>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">English</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Professional working proficiency</p>
                  </div>
                </div>
              </div>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <h5 className="fw-bold ps-2">French</h5>
                  </div>
                  <div className="d-flex flex-row ps-4">
                    <i className="fa fa-circle pt-1"></i>
                    <p className="ps-2">Elementary proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-media media pb-5 wow bounceIn">
            <i className="fa fa-puzzle-piece fa-2x icon"></i>
            <div className="media-body">
              <h3 className="fw-bolder">Hobbies</h3>
              <div className="media py-3">
                <div className="media-body">
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Playing Tonbak</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Watching Movies</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Getting Coffee</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Reading Books</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Drawing and Painting</p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fa fa-dot-circle-o pt-1"></i>
                    <p className="ps-2">Dancing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
