import React, { ReactElement } from "react";
import { Header } from "../Header";
import { MainBanner } from "../MainBanner";
import { Subtitle } from "../Subtitle";



export const App = (): ReactElement | null => {
  return (
    <div className="App">
      <Header />
      <MainBanner/>
      <Subtitle />
      
    </div>
  );
};
