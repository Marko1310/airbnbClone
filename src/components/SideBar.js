import React from "react";

const SideBar = ({ changeView }) => {
  return (
    <div className="sidebar">
      <div className="sidebar--buttons">
        <i
          onClick={(event) => {
            changeView(event);
          }}
          className="fa-solid fa-grip fa-2xl"
        ></i>
        Grid
      </div>

      <div className="sidebar--buttons">
        <i
          onClick={(event) => {
            changeView(event);
          }}
          className="fa-solid fa-list fa-xl"
        ></i>
        List
      </div>
    </div>
  );
};

export default SideBar;
