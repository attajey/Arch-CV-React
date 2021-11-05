import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-center text-white pt-5">
      <section>
        <div className="row">
          <div className="col-12 col-lg-6 pb-3">
            <h5 className="text-uppercase pb-3">Social Media</h5>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto: kimiakarimi2706@gmail.com"
              target="__blank"
              role="button"
            >
              <i className="zmdi zmdi-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1 "
              href="https://www.instagram.com/kim_folio/"
              target="__blank"
              role="button"
            >
              <i className="zmdi zmdi-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/kimia-karimi-42b702193/"
              target="__blank"
              role="button"
            >
              <i className="zmdi zmdi-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://t.me/Ki_M_ia"
              target="__blank"
              role="button"
            >
              <i className="zmdi zmdi-telegram"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6 pt-3">
            <h5 className="text-uppercase pb-3 ">Quick Access</h5>
            <ul className="list-unstyled pb-3">
              <li className="">
                <a href="./index.html" className="text-white">
                  Home
                </a>
              </li>
              <li className="">
                <a href="./projects.html" className="text-white">
                  Projects
                </a>
              </li>
              <li className="">
                <a href="./about.html" className="text-white">
                  About Me
                </a>
              </li>
              <li className="">
                <a href="./contact.html" className="text-white">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />

      <section className="row text-center pt-4">
        <div className="col-12">
          <a
            className="text-info"
            href="https://attajey.github.io/My-CV/"
            target="__blank"
          >
            <p>COPYLEFT &nbsp;2021 &nbsp;ATTA JIROFTY</p>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
