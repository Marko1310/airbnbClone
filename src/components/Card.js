// import star from "../images/star.png";
// console.log(props);

// const Card = (props) => {
//   let badgeText;
//   console.log(props.element);

//   if (props.element.openSpots === 0) {
//     badgeText = "SOLD OUT";
//   } else if (props.element.location === "Online") {
//     badgeText = "ONLINE";
//   }

//   return (
//     <div className="card">
//       {badgeText && <div className="card--badge">{badgeText}</div>}
//       <img
//         className="card--image"
//         src={require(`../images/${props.element.coverImg}`)}
//         alt="katie"
//       />
//       <div className="card--stats">
//         <img className="card--star" src={star} alt="star" />
//         <span>{props.element.stats.rating}</span>
//         <span className="grey">({props.element.stats.reviewCount}) . </span>
//         <span className="grey">{props.element.country}</span>
//       </div>

//       <p className="card--descrition">{props.element.title}</p>
//       <p className="card--price">
//         {" "}
//         <span className="bold">From ${props.element.price}</span> / person
//       </p>
//     </div>
//   );
// };

// export default Card;
