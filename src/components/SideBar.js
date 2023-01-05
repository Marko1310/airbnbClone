import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--buttons">
        <i
          onClick={() => {
            //   somefunction(el.id);
          }}
          className="fa-solid fa-grip fa-2xl"
        ></i>
        Grid
      </div>

      <div className="sidebar--buttons">
        <i
          onClick={() => {
            //   somefunction(el.id);
          }}
          className="fa-solid fa-list fa-xl"
        ></i>
        List
      </div>
    </div>
  );
};

export default SideBar;
