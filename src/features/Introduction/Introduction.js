import React from 'react';
import "./Introduction.css";
import {ReactComponent as Designer} from "../../assets/images/designer.svg";

const Welcome = () => {
    return (
        <div className="Welcome-container">
            <div className="Welcome-text">
                <div className="Welcome-primary-text">
                    Hi, I am Sougat Ganguly.
                </div>
                <div className="Welcome-secondary-text">
                    Welcome to my UI-based Resume! Feel free to drop some suggestions in the Contact Me Section.
                </div>
            </div>
            <div className="Welcome-image">
                <Designer/>
            </div>
        </div>
    )
}

export default Welcome;