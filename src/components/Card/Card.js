import React from 'react';
import './style.css';

function Card({ gnome }){
    return(
        <div className="card">
            <div className="card-img">
                <img src={gnome.thumbnail} alt="" />
            </div>
            <div className="card-name">
                {gnome.name}
            </div>
            <div className="card-age">
                {gnome.age}
            </div>
            <div className="card-profession">
                {gnome.professions}
            </div>
            <div className="card-hw">
                {gnome.weight}
                {gnome.height}
            </div>
        </div>
    ) 
}

export default Card;