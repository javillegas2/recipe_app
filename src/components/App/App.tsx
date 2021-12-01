import React, { ReactElement } from "react";
import { Header } from "../Header";
import { MainBanner } from "../MainBanner";



export const App = (): ReactElement | null => {
  return (
    <div className="App">
      <Header />
      <MainBanner/>
      
    </div>
  );
};
