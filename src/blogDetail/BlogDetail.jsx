import React,{useEffect , useState} from "react";
import "./blogdetail.css";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import SingleBlog from "../component/singleBlog";
import { URL } from "../Utils/const";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function BlogDetail() {

  const [data1, setdata1] = useState({});
  const [blogdata, setblogdata] = useState([])
  const { id } = useParams();
  const GetDetail = () =>{
    console.log("UseEffect is running...");
    console.log(URL + `/blogs/${id}`);
    axios
      .get(URL + `/blogs/${id}`)
      .then((response) => {
        console.log(response.data);
        setdata1(response.data);
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  }

  const GetBlog = () =>{
    axios
      .get(URL+"/blogs")
      .then((response) => {
        console.log(response.data);
        setblogdata(response.data)
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  }

  useEffect(() => {
    GetDetail();
    GetBlog();
  }, []);

  return (
    <>
      <TopBar />
     
      
            <div className="main">
            <div className="detailTop">
              <div className="d-flex gap-2">
                <h6>{data1?.category?.name}</h6>
                <p>{data1?.createdAt?.split("T")[0]}</p>
              </div>
              <h1>
               {data1?.title}
              </h1>
            </div>
            <img className="postBanner" src={URL+data1?.image} alt="" />
    
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
              {blogdata.slice(3,6).map((item, index) => {
                return <SingleBlog key={index} data={item} />;
              })}
            </div>
          </div>
          
       
      <Footer />
    </>
  );
}
