import React from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import "./about.css";
import aboutBanner from "../assets/images/aboutBanner.png";

export default function About() {
  return (
    <>
      <TopBar />
      <div className="main">
        <div className="container" id="aboutTop">
          <h6>ABOUT US</h6>
          <h1>
            Creative Blog Writting and <br /> publishing site
          </h1>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>

        <div className="imgContainer">
          <img className="imgAbout" src={aboutBanner} alt="" />
        </div>

        <div className="row" id="workTextHead">
          <div className="col-lg-6 col-md-12 col-sm-12 left">
            <h6>How We Work</h6>
            <h1>I will show you how our team works</h1>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 right">
            <p>
              Bring to the table win-win market strategies to ensure perfect
              articles.{" "}
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-space-between">
          <div className="col-md-4 col-sm-12 cardView">
            <h1>01</h1>
            <h4>Brainstorming</h4>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated
            </p>
            <h6>Learn More</h6>
          </div>

          <div className="col-md-4 col-sm-12 cardView">
            <h1>02</h1>
            <h4>Analysis</h4>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line solely on the bottom line.
            </p>
            <h6>Learn More</h6>
          </div>

          <div className="col-md-4 col-sm-12 cardView">
            <h1>03</h1>
            <h4>News Publishing</h4>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <h6>Learn More</h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
