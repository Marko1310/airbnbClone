import { React, useState } from "react";
import star from "../images/star.png";

const CardElements = ({ data, bookmarkCard }) => {
  return data.map((el) => {
    let badgeText;

    el.location === "Online"
      ? (badgeText = "ONLINE")
      : (badgeText = "SOLD OUT");

    return (
      <div key={el.id} className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <i
          id={el.id}
          onClick={() => {
            bookmarkCard(el.id);
          }}
          className={
            el.bookmarked === false
              ? "fa-regular fa-bookmark fa-2xl"
              : "fa-solid fa-bookmark fa-2xl"
          }
        ></i>
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

export default CardElements;
