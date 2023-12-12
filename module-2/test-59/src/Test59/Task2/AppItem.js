import React from "react";
import "./appItem.css";
import MyImagine from '../Task2/MyImagine'

const AppItem = ({ name, description, imgUrl }) => {
  return (
    <div className="app-item">
      <div className="task2_title">{name}</div>
      <div className="task2_description">{description}</div>
      <div className="image-container">
        <MyImagine imgUrl={imgUrl} />
      </div>

    </div>
  );
};

export default AppItem;
