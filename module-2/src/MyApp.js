import React from "react";
import AppWrapper from "./Test59/Task1/AppWrapper";
import AppItem from "./Test59/Task2/AppItem";
import MyImagine from "./Test59/Task2/MyImagine"
import Image from "./Test59/Task3/Image"
import { turtles } from './Test59/Task4/Constants';
import { getItemDescription } from './Test59/Task4/Utils';

const YourApp = () => {
  return (
    <div>
      <AppWrapper title="Тест 59">
        <div>Завдання 1</div>
      </AppWrapper>
      <AppItem
        name="Назва вашого елемента"
        description="Опис вашого елемента тут..."
        Image={MyImagine}
      />
      <Image imgUrl="./logo192.png" />
      <AppWrapper title="React Turtles">
        <div>Завдання 4</div>
      {turtles.map((turtle, index) => (
        <AppItem
          key={index}
          name={turtle.name}
          description={getItemDescription(turtle.nickName, turtle.weapon)}
          Image={MyImagine}
          imgUrl={turtle.imgUrl}
        />
      ))}
    </AppWrapper>
    </div>
  );
};

export default YourApp;
