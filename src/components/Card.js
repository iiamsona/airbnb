import React from "react";
import Star from "./images/Star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src ={`${props.img}`} className ="card--image" />
        <div className="card--status">
<img src={Star} className="card--star"/>
<span>{props.rating}</span>
<span className="gray">{props.reviewCount} • </span>
<span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}