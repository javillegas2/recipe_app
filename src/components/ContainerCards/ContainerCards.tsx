import React, { FC, ReactElement } from "react";

import { Card } from "./Card";

import './ContainerCards.scss';


const recipes = [
  {
    img: 'Ojingeo-muchim-5.png',
    title: 'Ojinjeo',
    subtitle: 'Muchim',
    portionSize: 4,
    time: 10,
    difficulty: 'fácil',
    points: '5.0'
  },
  {
    img: 'Ojingeo-muchim.png',
    title: 'Cola',
    subtitle: 'Chicken',
    portionSize: 4,
    time: 10,
    difficulty: 'fácil',
    points: '5.0'
  },
  {
    img: 'Ojingeo-muchim-1.png',
    title: 'Roasted',
    subtitle: 'Carrot',
    portionSize: 4,
    time: 10,
    difficulty: 'fácil',
    points: '4.5'
  },
  {
    img: 'cherry.png',
    title: 'Sweet',
    subtitle: 'Cherries',
    portionSize: 4,
    time: 10,
    difficulty: 'fácil',
    points: '4.0'
  }

];

export const ContainerCards: FC = (): ReactElement | null => {


  return (
    <div className="container-cards">

      {recipes.map(item => {
        return <Card key={item.title+item.subtitle} img={item.img} title={item.title} subtitle={item.subtitle} portionSize= {item.portionSize} time = {item.time} difficulty = {item.difficulty} points={item.points} />
      })}
    </div>

  );
};


