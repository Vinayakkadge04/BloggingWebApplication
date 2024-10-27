import React from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelopeOpen,
  faP,
} from "@fortawesome/free-solid-svg-icons";
import map from "../assets/images/map.png";

export default function Contact() {
  return (
    <>
      <TopBar />
      <div className="main">
        <div id="contactTop">
          <h1>Get In Touch</h1>
          <p>
            Contact us to publish your content and show ads to our <br />{" "}
            website and get a good reach.
          </p>
        </div>

        <div className="cardSection gap-3 row">
          <div className="col myCard">
            <div className="iconBg">
              <FontAwesomeIcon className="cardIcon" icon={faHouse} />
            </div>
            <h5>Office</h5>
            <p>Shubham Complex, Agashi, Virar</p>
          </div>

          <div className="col myCard">
            <div className="iconBg">
              <FontAwesomeIcon className="cardIcon" icon={faEnvelopeOpen} />
            </div>
            <h5>Email</h5>
            <p>vinayak@hexagn.in</p>
          </div>

          <div className="col myCard">
            <div className="iconBg">
              <FontAwesomeIcon className="cardIcon" icon={faPhone} />
            </div>
            <h5>Phone</h5>
            <p>+91 8806204889</p>
          </div>
        </div>
        <div>
          <div className="formSection">
            <img className="mapImg" src={map} alt="" />
            <div className="contactForm">
              <form>
                <div className="row">
                  <div className="col-6 formField">
                    <label>Name</label>
                    <input type="text" />

                    <label>Phone</label>
                    <input type="text" />
                  </div>
                  <div className="col-6 formField">
                    <label>Email</label>
                    <input type="text" />
                    <label>Subject</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="formField">
                  <label>Message</label>
                  <textarea name="" id=""></textarea>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button className="primaryButton">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
