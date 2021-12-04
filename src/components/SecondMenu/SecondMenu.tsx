import React, { FC, ReactElement } from "react";

import './SecondMenu.scss';

const menuItems = [
    {
        image: '/img/icons/ic_vegetarian.svg',
        label: 'Vegetarianos'
    },
    {
        image: '/img/icons/ic_main.svg',
        label: 'Principales'
    },
    {
        image: '/img/icons/ic_cake.svg',
        label: 'Tortas'
    },
    {
        image: '/img/icons/ic_fast-food.svg',
        label: 'Rápida'
    },
    {
        image: '/img/icons/ic_kids.svg',
        label: 'Menú Niños'
    },
    {
        image: '/img/icons/ic_soup.svg',
        label: 'Sopas'
    }

];

export const SecondMenu: FC = (): ReactElement | null => {
    return (
        <div className="container-extern">
            <div className="second-menu">

                {menuItems.map(item => {
                    return (
                        <div key={item.label} className="second-menu-item">
                            <img src={item.image} />
                            <div className="second-menu-text">{item.label}</div>
                        </div>
                    );
                })}


            </div>

        </div>


    );
};


