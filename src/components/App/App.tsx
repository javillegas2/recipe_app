import React, { ReactElement } from "react";
import { ContainerCards } from "../ContainerCards";
import { Header } from "../Header";
import { MainBanner } from "../MainBanner";
import { Subtitle } from "../Subtitle";



export const App = (): ReactElement | null => {
  return (
    <div className="App">
      <Header />
      <MainBanner/>
      <Subtitle />
      <ContainerCards />
      
    </div>
  );
};
