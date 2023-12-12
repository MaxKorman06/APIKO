import React from "react";
import AppWrapper from "./Test59/Task1/AppWrapper";
import AppItem from "./Test59/Task2/AppItem";
import { turtles } from "./Test59/Task4/Constants";
import { getItemDescription } from "./Test59/Task4/Utils";

const YourApp = () => {
  return (
    <div>
      <AppWrapper title="React Turtles">
        <div className="Task_4_row">Завдання 4</div>
        {turtles.map((turtle, index,) => (
          <AppItem
            key={index}
            name={turtle.name}
            description={getItemDescription(turtle.nickName, turtle.weapon)}
            imgUrl={turtle.imgUrl}
          />
        ))}
      </AppWrapper>
    </div>
  );
};

export default YourApp;
