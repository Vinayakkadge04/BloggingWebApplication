import React from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import "./blogpage.css";

export default function BlogPage() {
  return (
    <>
      <TopBar />
      <div className="main">
        <div className="container" id="blogTop">
          <h6>OUR BLOGS</h6>
          <h1>Find our all blogs from here</h1>
          <p>
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>

        <div id="postGrid" className="row">
          <div className="col-md-4 mb-5 col-sm-12">
            <img src={post1} alt="" />
            <div className="d-flex gap-2 mt-3">
              <h6>Travel</h6>
              <h6>13 March 2024</h6>
            </div>
            <h2>Train Or Bus Journey?Which one suits?</h2>
            <p>
              The choice between a train or bus journey depends on various
              factors such as the distance of the journey, the time available,
              the cost, and person
            </p>
            <a href={"/detail"}>
              <h4>Read More...</h4>
            </a>
          </div>

          <div className="col-md-4 mb-5 col-sm-12">
            <img src={post2} alt="" />
            <div className="d-flex gap-2 mt-3">
              <h6>Travel</h6>
              <h6>13 March 2024</h6>
            </div>
            <h2>Best Website to research for your next project</h2>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs
            </p>
            <a href={"/detail"}>
              <h4>Read More...</h4>
            </a>
          </div>

          <div className="col-md-4 col-sm-12 mb-5 pb-5">
            <img src={post3} alt="" />
            <div className="d-flex gap-2 mt-3">
              <h6>Travel</h6>
              <h6>13 March 2024</h6>
            </div>
            <h2>How to Be a Dancer in 2023 with proper skills?</h2>
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment. survival strategies to
              ensure proactive
            </p>
            <a href={"/detail"}>
              <h4>Read More...</h4>
            </a>
          </div>

          <div className="col-md-4 col-sm-12 mb-5 pb-5">
            <img src={post1} alt="" />
            <div className="d-flex gap-2 mt-3">
              <h6>Travel</h6>
              <h6>13 March 2024</h6>
            </div>
            <h2>Who is the best singer on chart?Know him?</h2>
            <p>
              chart by Billboard which ranks the all-time greatest artists based
              on their performance on the weekly Billboard Hot 100 and
            </p>
            <a href={"/detail"}>
              <h4>Read More...</h4>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
