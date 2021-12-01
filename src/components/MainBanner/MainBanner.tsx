import React, { FC, ReactElement } from "react";

import './MainBanner.scss';


export const MainBanner: FC = (): ReactElement | null => {
  return (
      <div className="container-banner">
          <div className="container-banner-title">Recetas</div>
          <div className="container-banner-subtitle">para todos</div>

      </div>
    
  );
};


