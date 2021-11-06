import React, { Fragment } from "react";

const About = () => {
  document.title = "Contact Me";
  return (
    <Fragment>
      <div className="row p-5">
        <div className="col-12 text-center">
          <h1>Contact Me</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-md-4 col-12 px-5 px-md-0">
          <form
            className=""
            action="mailto:kimiakarimi2706@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="mt-2 form-group">
              <input
                type="text"
                name="Your Name"
                className="form form-control"
                id="contactFormEmail"
                placeholder="Name"
              />
            </div>
            <div className="mt-2 form-group">
              <input
                type="text"
                name="Subject"
                className="form form-control"
                id="contactFormSubject"
                placeholder="Subject"
              />
            </div>
            <div className="mt-2 form-group">
              <textarea
                name="Message"
                className="msg-form form-control"
                row="10"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="mt-3 btn btn-dark mx-1"
            >
              SEND
            </button>
            <button
              type="reset"
              value="Reset"
              className="mt-3 btn btn-dark mx-1"
            >
              RESET
            </button>
          </form>
        </div>
        <div className="col-md-6 col-12 contact-section">
          <div className="contact">
            <i className="fa fa-phone contact-icon"></i>
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              title="Click to Call"
              href="tel:+989029696776"
            >
              +989029696776
            </a>
          </div>
          <div className="contact">
            <i className="fa fa-google contact-icon"></i>
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              title="Click to Send Email"
              href="mailto: kimiakarimi2706@gmail.com"
            >
              kimiakarimi2706@gmail.com
            </a>
          </div>
          <div
            className="contact"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Click to View on Map"
          >
            <i className="fa fa-map-pin contact-icon"></i>
            <address className="pt-3">
              <a href="https://goo.gl/maps/gvQHEjRDTPpVSDrt7" target="__blank">
                40th Sayyad Shirazi Blvd, Mshd, Iran
              </a>
            </address>
          </div>
          <div className="social-media">
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              title="Linkedin"
              href="https://www.linkedin.com/in/kimiakarimi/"
              target="__blank"
            >
              <i className="fa fa-linkedin fa-2x social-icons"></i>
            </a>
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              title="Instagram"
              href="https://www.instagram.com/kim_folio/"
              target="__blank"
            >
              <i className="fa fa-instagram fa-2x social-icons"></i>
            </a>
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              title="Telegram"
              href="https://t.me/Ki_M_ia"
              target="__blank"
            >
              <i className="fa fa-telegram fa-2x social-icons"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
