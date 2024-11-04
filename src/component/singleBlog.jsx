import React from "react";
import post1 from '../assets/images/post1.png'
import { URL } from "../Utils/const";

export default function SingleBlog(props) {


  return (
    <div className="col-lg-4 col-md-6 mb-5 col-sm-12">
      <img className="blogImg" src={URL + props?.data?.image} alt="" />
      <div className="d-flex gap-2 mt-3">
        <h6>{props?.data?.category?.name}</h6>
        <h6>{

        // props?.data?.createdAt.split("T")[0]

        new Date(props.data?.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
        
        }</h6>
      </div>
      <h2>{props?.data?.title}</h2>
      <p>
        {props?.data?.content?.slice(0,120)}...
      </p>
      <a href={`/detail/${props?.data?.id}`}>
        <h4>Read More...</h4>
      </a>
    </div>
  );
}
