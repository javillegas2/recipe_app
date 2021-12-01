import React, { FC, ReactElement } from "react";
import { Card } from "./Card";

import './ContainerCards.scss';


const recipes = [
  {
    img: 'Ojingeo-muchim-5.png',
    title: 'Ojinjeo',
    subtitle: 'Muchim'
  },
  {
    img: 'Ojingeo-muchim.png',
    title: 'Cola',
    subtitle: 'Chicken'
  },
  {
    img: 'Ojingeo-muchim-1.png',
    title: 'Roasted',
    subtitle: 'Carrot'
  },
  {
    img: 'cherry.png',
    title: 'Sweet',
    subtitle: 'Cherries'
  }

];

export const ContainerCards: FC = (): ReactElement | null => {


  return (
    <div className="container-cards">

      {recipes.map(item => {
        return <Card img={item.img} title={item.title} subtitle={item.subtitle} />
      })}
    </div>

  );
};


