import React, { useState, useEffect } from "react";
import TopBar from "../topbar/topbar";
import homeBanner from "../assets/images/homeBanner.png";
import homeb2 from "../assets/images/homeb2.png";
import homeBanner2 from "../assets/images/homeBanner2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homescreen.css";
import "../global.css";
import Footer from "../footer/Footer";
import SingleBlog from "../component/singleBlog";
import axios from "axios";
import { URL } from "../Utils/const";

export default function HomeScreen() {
  const [data, setdata] = useState([]);
  const [resBlog , setresBlog] = useState("");

  useEffect(() => {
    axios
      .get(URL + "/blogs")
      .then((response) => {
        const blogs = response.data;
        setresBlog(response.data[response.data.length-1]);
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  }, []);

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
            <img style={{ borderRadius: '12px' }} className="w-100" src={URL + resBlog?.image} alt="" />
          </div>
          <div className="section2Text">
            <div className="d-flex gap-3">
              <p style={{textTransform:"uppercase"}}>{resBlog?.category?.name}</p>
              <p>{resBlog?.createdAt?.split("T")[0]}</p>
            </div>
            <h2>
             {resBlog.title}
            </h2>
            <p>
             {resBlog.content}
            </p>
            <a style={{textDecoration:"none"}} href={`/detail/${resBlog.id}`}><div className="secondBtn">Read More</div></a> 
          </div>
        </div>

        {/* Recent Post Section */}
        <div className="recentPost">
          <h1>Our Recent Post</h1>
          <a style={{textDecoration:"none"}} href={"/blogs"}> <div className="primaryButton">View All</div></a>
        </div>
        {/* recent Post section 2 */}
        <div className="row mainPost">
          <div className="col-md-5 col-sm-12 mainPostLeft">
            <img style={{borderRadius:"9px"}} className="postImg" src={URL + resBlog?.image} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 mainPostRight">
            <div className="d-flex gap-3">
              <h6>{resBlog?.category?.name}</h6>
              <h6>{resBlog?.createdAt?.split("T")[0]}</h6>
            </div>
            <h1>
             {resBlog?.title}
            </h1>
            <p>
             {resBlog?.content}
            </p>
            <a style={{textDecoration:"none"}} href={`/detail/${resBlog.id}`}><div className="secondBtn">Read More</div></a>
          </div>
        </div>

        {/* Grid Section */}

        <div className="row category">
          {data.slice(1,4).map((item, index) => {
            return <SingleBlog key={index} data={item} />;
          })}
        </div>
      </div>

      {/* Footer Top  */}

      <Footer />
    </div>
  );
}
