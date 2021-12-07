import React, { FC, ReactElement } from "react";
import { cardT } from "./CardTypes";

import './ContainerCards.scss';


export const Card: FC<cardT> = ({ img, title, subtitle, portionSize,time, difficulty, points }): ReactElement | null => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="header-image" style={{ backgroundImage: 'url(../../img/' + img + ')' }}></div>
            </div>
            <div className="card-body">
                <div className="empty-space-sup"></div>
                <div className="principal-view-card">
                    <div className="card-names">
                        <span className="title">{title}</span>
                        <span className="subtitle">{subtitle}</span>
                    </div>
                    <div className="principal-view-card-footer">
                        <div className="points">
                            <img src="/img/icons/ic_star.svg" alt="stars" />
                            <span className="number">{points}</span>

                        </div>
                        <div className="favourite">
                            <img src="/img/icons/ic-favorite.svg" alt="favorite" />
                        </div>

                    </div>
                </div>
                <div className="secondary-view-card">
                    <div className="section-recipe">
                        <div className="image">
                        <img src="/img/icons/ic_portion.svg" alt="portion" />
                        </div>
                        <div className="title-section">Tamaño de la porción</div>
                        <div className="desc-section">{portionSize} raciones</div>
                    </div>
                    <div className="section-recipe">
                        <div className="image">
                        <img src="/img/icons/ic_time.svg" alt="time" />
                        </div>
                        <div className="title-section">Tiempo de preparación</div>
                        <div className="desc-section">{time} minutos</div>
                    </div>
                    <div className="section-recipe">
                        <div className="image">
                        <img src="/img/icons/ic_chef.svg" alt="chef" />
                        </div>
                        <div className="title-section">Dificultad</div>
                        <div className="desc-section">{difficulty}</div>
                    </div>
                </div>

            </div>



        </div>

    );
};


