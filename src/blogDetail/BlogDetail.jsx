import React from "react";
import "./blogdetail.css";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import postImg from "../assets/images/homeBanner2.png";
import post1 from '../assets/images/post1.png'
import post2 from '../assets/images/post2.png'
import post3 from '../assets/images/post3.png'
import {data} from '../component/blog';
import SingleBlog from "../component/singleBlog";

export default function BlogDetail() {
  return (
    <>
      <TopBar />
      <div className="main">
        <div className="detailTop">
          <div className="d-flex gap-2">
            <h6>DEVELOPMENT</h6>
            <p>16 March 2024</p>
          </div>
          <h1>
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
        </div>
        <img className="postBanner" src={postImg} alt="" />

        <p className="discription">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone. We’re now at a pivotal moment in our
          AI journey. Breakthroughs in generative AI are fundamentally changing
          how people interact with technology — and at Google, we’ve been
          responsibly developing large language models so we can safely bring
          them to our products. Today, we’re excited to share our early
          progress. Developers and businesses can now try new APIs and products
          that make it easy, safe and scalable to start building with Google’s
          best AI models through Google Cloud and a new prototyping environment
          called MakerSuite. And in Google Workspace, we’re introducing new
          features that help people harness the power of generative AI to
          create, connect and collaborate.
        </p>


        <div className="recentPost">
          <h1>Our Recent Post</h1>
        <div className="primaryButton">View All</div>
      </div>


      <div className="row category">

        {
          data.map((item , index)=>{
            return <SingleBlog data ={item}/>
          })
        }

      </div>

      </div>
      <Footer />
    </>
  );
}
