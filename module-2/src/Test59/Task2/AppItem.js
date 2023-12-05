import React from "react";
import "./appItem.css";

const AppItem = ({ name, description, Image }) => {
  return (
    <div className="app-item">
      <div className="task2_title">{name}</div>
      <div className="task2_description">{description}</div>
      <div className="image-container">
      <Image></Image>
      </div>
     
    </div>
  );
};

export default AppItem;
