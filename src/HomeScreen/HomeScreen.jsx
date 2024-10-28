import React from "react";
import TopBar from "../topbar/topbar";
import homeBanner from "../assets/images/homeBanner.png";
import homeb2 from "../assets/images/homeb2.png";
import homeBanner2 from "../assets/images/homeBanner2.png";
import post1 from "../assets/images/post1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homescreen.css";
import "../global.css";
import Footer from "../footer/Footer";
import SingleBlog from "../component/singleBlog";
import {data} from '../component/blog'

export default function HomeScreen() {
  return (
    <div>
      <TopBar />

      {/* Top Section */}


      <div className="row topSection">
        <div className="col-lg-6 col-md-6 col-sm-12 topLeftSection">
          <p>Featured Post</p>
          <h2>How AI will Change the Future</h2>
          <p>
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <div className="secondBtn">Read More</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 topRightSection">
          <img src={homeBanner} alt="" />
        </div>
      </div>

      {/* Second Section */}
      <div className="main">
        <div className="section2">
          <div className="banner">
            <img className="w-100" src={homeBanner2} alt="" />
          </div>
          <div className="section2Text">
            <div className="d-flex gap-3">
              <p>DEVELOPMENT</p>
              <p>16 March 2024</p>
            </div>
            <h2>
              How to make a Game look more attractive with New VR & AI Technology
            </h2>
            <p>
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <div className="secondBtn">Read More</div>
          </div>
        </div>

        {/* Recent Post Section */}
        <div className="recentPost">
          <h1>Our Recent Post</h1>
          <div className="primaryButton">View All</div>
        </div>
        {/* recent Post section 2 */}
        <div className="row mainPost">
          <div className="col-md-5 col-sm-12 mainPostLeft">
            <img className="postImg" src={homeb2} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 mainPostRight">
            <div className="d-flex gap-3">
              <h6>DEVELOPMENT</h6>
              <h6>16 March 2024</h6>
            </div>
            <h1>
              How to make a Game look more attractive with New VR & AI Technology
            </h1>
            <p>
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <div className="secondBtn">Read More</div>
          </div>
        </div>

        {/* Grid Section */}

        <div className="row category">

          {
              data.map((item , index)=>{
                return <SingleBlog key={index} data={item}/>
              })

          }
        </div>
      </div>



      {/* Footer Top  */}

      <Footer />
    </div>
  );
}
