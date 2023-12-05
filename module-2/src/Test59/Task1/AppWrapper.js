import React from "react";
import "./appWrapper.css";

const AppWrapper = ({ title, children }) => {
  return (
    <div className="app-wrapper">
      <div className="task1_title">{title}</div>
      <div className="task1_content">{children}</div>
    </div>
  );
};

export default AppWrapper;
