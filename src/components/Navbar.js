import React from "react";
import Vector from "./images/Vector.png";
export default function Navbar(){
    return(
        <nav>
            <img src={Vector} alt="logo" className="nav--logo"/>
        </nav>
    )
}