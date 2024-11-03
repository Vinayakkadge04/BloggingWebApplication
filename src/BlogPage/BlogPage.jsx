import React, { useState, useEffect } from "react";
import TopBar from "../topbar/topbar";
import Footer from "../footer/Footer";
import "./blogpage.css";
import SingleBlog from "../component/singleBlog";
import axios from "axios";
import { URL } from "../Utils/const";
// import { data } from "../component/blog";

export default function BlogPage() {
  const [data, setdata] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    axios
      .get(URL + "/blogs")
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error, "####Error####");
      });
  }, []);

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
          {currentBlogs.map((item, index) => {
            console.log(item);
            return <SingleBlog data={item} />;
          })}
        </div>

        <div className="pagenationControl">
          <button className="pageButton" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button className="pageButton"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>


      </div>

      <Footer />
    </>
  );
}
