import React from "react";
import post1 from '../assets/images/post1.png'

export default function SingleBlog(props) {


  return (
    <div className="col-lg-4 col-md-6 mb-5 col-sm-12">
      <img src={props.data.img} alt="" />
      <div className="d-flex gap-2 mt-3">
        <h6>Travel</h6>
        <h6>{props.data.date}</h6>
      </div>
      <h2>{props.data.title}</h2>
      <p>
        {props.data.desc}
      </p>
      <a href={'/detail'}>
        <h4>Read More...</h4>
      </a>
    </div>
  );
}
