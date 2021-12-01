import React, { ReactElement, useState } from "react";

import './Header.scss';

export const Header = (): ReactElement | null => {

  const [selected, setSelected] = useState<string>('Home');

  

  return (
    <header className="App-header">
        <div className="container-name-app">
          <span className="monster-font text-title-recipe">Recipe</span>
          <span className="poppins text-title-app">App</span>
        </div>
        <nav className="nav-menu-sup">
          <span className ={"poppins menu-item"+(selected==='Home'?' selected':'')} onClick={()=>setSelected('Home')}>Home</span>
          <span className ={"poppins menu-item"+(selected==='vegetarian'?' selected':'')} onClick={()=>setSelected('vegetarian')}>Vegetarianos</span>
          <span className ={"poppins menu-item"+(selected==='dishes'?' selected':'')} onClick={()=>setSelected('dishes')}>Platos Principales</span>
          <span className ={"poppins menu-item"+(selected==='cakes'?' selected':'')} onClick={()=>setSelected('cakes')}>Tortas</span>
          <span className ={"poppins menu-item"+(selected==='flash'?' selected':'')} onClick={()=>setSelected('flash')}>Comida Rápida</span>
          <span className ={"poppins menu-item"+(selected==='child'?' selected':'')} onClick={()=>setSelected('child')}>Menú Niños</span>
          <span className ={"poppins menu-item"+(selected==='soup'?' selected':'')} onClick={()=>setSelected('soup')}>Sopas</span> 
        </nav>
      </header>
  );
};


