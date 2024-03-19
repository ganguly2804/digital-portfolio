import React from "react";
import "./Technology.css";
import VerticalProgressBar from "../generic/VerticalProgressBar/VerticalProgressBar"

const TechnologyCard = () => {

    const technologyCardTitle = "Technology";
    const technologyCardContent = {
        "Python": 80,
        "ReactJS": 70,
        "HTML/CSS": 70,
        "NodeJS": 60,
        "MongoDB": 40,
        "Java": 80
    }

    const barColorArr = {
        0: 'rgb(116, 103, 239)',
        1: 'rgb(255, 158, 67)'
    }

    const bgColorArr = {
        0: 'rgb(202, 197, 248)',
        1: 'rgb(255, 218, 183)'
    }


    return (
        <div className="TechnologyCard-container">
            <div className="TechnologyCard-title">{ technologyCardTitle }</div>
            <div className="TechnologyCard-content">
                {
                    Object.entries(technologyCardContent).map(([key, value], index) => (
                        <div className="TechnologyCard-col" key={key}>
                            <div className="TechnologyCard-bar">
                                <VerticalProgressBar barcolor={barColorArr[index%2]} bgcolor={bgColorArr[index%2]} progress={value} />
                            </div>
                            <div className="TechnologyCard-text">
                                {key}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default TechnologyCard;