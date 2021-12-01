import React, { FC, ReactElement } from "react";
import { cardT } from "./CardTypes";

import './ContainerCards.scss';


export const Card: FC<cardT> = ({img, title, subtitle }): ReactElement | null => {
  return (
      <div className="card">
          <div className="card-header">
              <div className = "header-image" style={{ backgroundImage: "url('../../img/Ojingeo-muchim.png')"}}></div>
          </div>
          <div className="card-body"></div>

          

      </div>
    
  );
};


