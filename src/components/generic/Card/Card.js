import React from "react";
import "./Card.css";

const Card = ({ cardTitle, CardContent }) => {
    return (
        <div className="Card-container">
            <div className="Card-title">{ cardTitle }</div>
            { CardContent }
        </div>
    )
}

export default Card;