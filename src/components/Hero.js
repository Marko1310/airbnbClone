import grid from "../images/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero--gridphoto" src={grid} alt="grid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--descritpion">
        Join unique interactive activities led by one-of-a-kind-hostsall without
        leaving home.
      </p>
    </div>
  );
};

export default Hero;
