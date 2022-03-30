import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRatings = (props) => {
  function ratings() {
    var totalStars = [];
    for (let i = 0; i < 5; i++) {
      if (i <props.stars) {
        totalStars.push(<AiFillStar />);
      } else totalStars.push(<AiOutlineStar />);
    }
    return totalStars;
  }

  return (
    <>
      {ratings()}
    </>
  );
};

export default StarRatings;
