import React from "react";
import "./image.css";

const Image = ({ imgUrl }) => {
  return (
    <div className="bg_task3">
      <span className="task3_description">Завдання 3</span>
      <div className="image-container_task3">
        <img className="image" src={imgUrl} alt="Зображення" />
      </div>
    </div>
  );
};

export default Image;
