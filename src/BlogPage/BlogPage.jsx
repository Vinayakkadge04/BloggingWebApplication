import React from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import post1 from "../assets/images/post1.png";
import './blogpage.css'

export default function BlogPage() {
  return (
    <>
      <TopBar />
      <div className="main">
      <div className="container" id="aboutTop">
        <h6>OUR BLOGS</h6>
        <h2>Find our all blogs from here</h2>
        <p>
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>

      <div id="postGrid" className="row">
        <div className="col-md-4 mb-5 col-sm-12">
          <img src={post1} alt="" />
          <div className="d-flex gap-2 mt-3">
            <h6>Travel</h6>
            <h6>13 March 2024</h6>
          </div>
          <h2>8 Rules of Travelling In Sea You Need To Know</h2>
          <p>
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs
          </p>
          <a href="#"><h4>
            Read More...
            </h4></a>
        </div>


        <div className="col-md-4 mb-5 col-sm-12">
          <img src={post1} alt="" />
          <div className="d-flex gap-2 mt-3">
            <h6>Travel</h6>
            <h6>13 March 2024</h6>
          </div>
          <h2>8 Rules of Travelling In Sea You Need To Know</h2>
          <p>
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs
          </p>
          <a href="#"><h4>
            Read More...
            </h4></a>
        </div>

        <div className="col-md-4 col-sm-12 mb-5 pb-5">
          <img src={post1} alt="" />
          <div className="d-flex gap-2 mt-3">
            <h6>Travel</h6>
            <h6>13 March 2024</h6>
          </div>
          <h2>8 Rules of Travelling In Sea You Need To Know</h2>
          <p>
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs
          </p>
          <a href="#"><h4>
            Read More...
            </h4></a>
        </div>


        <div className="col-md-4 col-sm-12 mb-5 pb-5">
          <img src={post1} alt="" />
          <div className="d-flex gap-2 mt-3">
            <h6>Travel</h6>
            <h6>13 March 2024</h6>
          </div>
          <h2>8 Rules of Travelling In Sea You Need To Know</h2>
          <p>
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs
          </p>
          <a href="#"><h4>
            Read More...
            </h4></a>
        </div>

      </div>

      </div>

     
      <Footer />
    </>
  );
}
