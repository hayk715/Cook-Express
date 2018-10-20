import React from "react";
import "./Food.css";

const Food = props => (
    <div className="food text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
    </div>
);

export default Food;