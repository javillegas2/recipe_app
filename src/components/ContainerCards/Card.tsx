import React, { FC, ReactElement } from "react";
import { cardT } from "./CardTypes";

import './ContainerCards.scss';


export const Card: FC<cardT> = ({img, title, subtitle }): ReactElement | null => {
  return (
      <div className="card">
          <div className="card-header">
              <div className = "header-image" style={{ backgroundImage: 'url(../../img/'+img+')'}}></div>
          </div>
          <div className="card-body">
              <div className="empty-space-sup"></div>
              <div className="card-names">
                  <span className="title">{title}</span>
                  <span className="subtitle">{subtitle}</span>
              </div>
          </div>

          

      </div>
    
  );
};


