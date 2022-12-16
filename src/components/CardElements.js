import { React, useRef, useState } from "react";
import star from "../images/star.png";

const CardElements = ({ data }) => {
  // State for the iconsClass
  const [clicked, setClicked] = useState(false);

  // Reference the bookmark icon
  const elementRef = useRef();

  function changeIcon() {
    setClicked((prevClicked) => {
      return !prevClicked;
    });
    const bookmarkIcon = elementRef.current;
    bookmarkIcon.className = "none";
    console.log(bookmarkIcon);
  }

  return data.map((el) => {
    let badgeText;

    el.location === "Online"
      ? (badgeText = "ONLINE")
      : (badgeText = "SOLD OUT");

    return (
      <div key={el.id} className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <i
          ref={elementRef}
          onClick={changeIcon}
          className={
            clicked
              ? "fa-solid fa-bookmark fa-2xl"
              : "fa-regular fa-bookmark fa-2xl"
          }
        ></i>
        {/* <i class="fa-solid fa-bookmark fa-2xl"></i> */}
        <img
          className="card--image"
          src={require(`../images/${el.coverImg}`)}
          alt="katie"
        />
        <div className="card--stats">
          <img className="card--star" src={star} alt="star" />
          <span>{el.stats.rating}</span>
          <span className="grey">({el.stats.reviewCount}) . </span>
          <span className="grey">{el.country}</span>
        </div>

        <p className="card--descrition">{el.title}</p>
        <p className="card--price">
          {" "}
          <span className="bold">From ${el.price}</span> / person
        </p>
      </div>
    );
  });
};

// const Card = (props) => {
//   let badgeText;

//   if (props.element.openSpots === 0) {
//     badgeText = "SOLD OUT";
//   } else if (props.element.location === "Online") {
//     badgeText = "ONLINE";
//   }

export default CardElements;
