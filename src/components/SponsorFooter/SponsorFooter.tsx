

import React, { FC, ReactElement } from "react";

import './SponsorFooter.scss';


export const SponsorFooter: FC = (): ReactElement | null => {
  return (
      <div className="sponsor-footer">
          <div className="gradient-band">
              <div className="sponsor-desc">Con el Patrocinio de</div>

          </div>
          <div className="market_image"></div>
          

      </div>
    
  );
};


