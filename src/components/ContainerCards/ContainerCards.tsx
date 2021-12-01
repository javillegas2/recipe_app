import React, { FC, ReactElement } from "react";
import { Card } from "./Card";

import './ContainerCards.scss';


export const ContainerCards: FC = (): ReactElement | null => {
  return (
      <div className="container-cards">
          <Card img={'Ojingeo-muchim.png'} title ={'Ojinjeo'} subtitle ={'Muchim'} />
          <Card img={'Ojingeo-muchim.png'} title ={'Ojinjeo'} subtitle ={'Muchim'} />
          <Card img={'Ojingeo-muchim.png'} title ={'Ojinjeo'} subtitle ={'Muchim'} />
          <Card img={'Ojingeo-muchim.png'} title ={'Ojinjeo'} subtitle ={'Muchim'} />
          

      </div>
    
  );
};


