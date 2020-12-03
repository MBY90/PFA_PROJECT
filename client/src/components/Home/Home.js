import React from "react";
import doc11 from "../../images/doc11.jpg";
import doc2 from "../../images/doc2.JPG";
import cond11 from "../../images/cond11.JPG";
import cond22 from "../../images/cond22.JPG";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title1">top Speciality</h1>
      <div className="docSp">
        <img src={doc11} alt="Speciality" className="img1"></img>
        <img src={doc2} alt="Speciality" className="img2"></img>
      </div>
      <h1 className="title2">top Condition</h1>
      <div className="Pcond">
        <img src={cond11} alt="condition" className="img11"></img>
        <img src={cond22} alt="condition" className="img22"></img>
      </div>
    </div>
  );
};

export default Home;
