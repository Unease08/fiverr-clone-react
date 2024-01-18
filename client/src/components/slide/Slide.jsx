import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel/lib";

const Slide = ({ children, sildesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider sildesToShow={sildesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
