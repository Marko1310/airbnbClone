import star from "../images/star.png";

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className="card">
      {/* <div className="card--status">SOLD OUT</div> */}
      <img
        className="card--image"
        src={require(`../images/${img}`)}
        alt="katie"
      />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) . </span>
        <span className="grey">{country}</span>
      </div>

      <p className="card--descrition">{title}</p>
      <p className="card--price">
        {" "}
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
