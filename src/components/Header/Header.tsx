import React, { ReactElement } from "react";

import './Header.scss';

export const Header = (): ReactElement | null => {
  return (
    <header className="App-header">
        <div>
          <span className="monster-font text-title-recipe">Recipe</span>
          <span className="poppins text-title-app">App</span>
        </div>
        <nav className="nav-menu-sup">
          <a className ="poppins menu-item selected" href="/home/">Home</a>
          <a className ="poppins menu-item" href="/vegetarian/">Vegetarianos</a>
          <a className ="poppins menu-item" href="/dishes/">Platos Principales</a>
          <a className ="poppins menu-item" href="/cakes/">Tortas</a>
          <a className ="poppins menu-item" href="/flash/">Comida Rápida</a>
          <a className ="poppins menu-item" href="/menu-child/">Menú Niños</a>
          <a className ="poppins menu-item" href="/Soup/">Sopas</a> 
        </nav>
      </header>
  );
};


