import React, { useState, useEffect } from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import SingleBlog from "../component/singleBlog";
import axios from "axios";
import { URL } from "../Utils/const";
import { useParams } from "react-router-dom";
import Pegenation from "../component/Pegenation";

export default function BlogByCategory() {
  const [data, setdata] = useState([]);
  const [catDetail, setCatDetail] = useState("");

  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);

  const indexOfLastBlog = currentPage * postPerPage;
  const indexOfFirstBlog = indexOfLastBlog - postPerPage;

  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

  const GetBlogs = () => {
    axios
      .get(URL + `/blogs/category/${id}`)
      .then((response) => {
        console.log(response.data);
        setdata(response.data.reverse());
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  };

  const categoryDetail = () => {
    axios
      .get(URL + `/categories/${id}`)
      .then((response) => {
        console.log(response.data);
        setCatDetail(response.data);
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  };

  useEffect(() => {
    GetBlogs();
    categoryDetail();
  }, [id]);

  return (
    <>
      <TopBar />
      <div className="main">
        <div className="container" id="blogTop">
          <h6>OUR BLOGS</h6>
          <h1>Find our {catDetail.name} blogs from here</h1>
          <p>
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>

        <div id="postGrid" className="row">
          {currentBlogs.map((item, index) => {
            console.log(item);
            return <SingleBlog data={item} />;
          })}
        </div>

        {
          <Pegenation
            totalPosts={data.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        }
      </div>

      <Footer />
    </>
  );
}
