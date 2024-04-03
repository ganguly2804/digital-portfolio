import React from "react";
import "./Skills.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const DomainsCard = () => {

    const domainsCardTitle = "Domains";
    const domainsCardContent = {
        "Frontend Dev": 80,
        "Backend Dev": 70,
        "Coding": 60,
        "Algorithmic Trading": 40,
        "Robotics": 80
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
        <div className="DomainsCard-container">
            <div className="DomainsCard-title">{domainsCardTitle}</div>
            <div className="DomainsCard-content">
                {
                    Object.entries(domainsCardContent).map(([key, value], index) => (
                        
                        <div className="DomainsCard-row" key={key}>
                            <div className="DomainsCard-row-left">
                                <div className="Circle"></div>
                                {key}
                            </div>
                            <div className="DomainsCard-row-right">
                                <div className="Progress-bar">
                                    <ProgressBar barcolor={barColorArr[index%2]} bgcolor={bgColorArr[index%2]} progress={value} />
                                </div>
                                <div>{value}%</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DomainsCard;