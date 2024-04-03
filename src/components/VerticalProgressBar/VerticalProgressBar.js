import React from "react";
import "./VerticalProgressBar.css"

const VerticalProgressBar = ({barcolor, bgcolor, progress}) => {
    
        
    return (
        <div className="Vertical-progress-bar-parent"
            style = {{
                "--bgcolor": bgcolor
            }}>
            <div className="Vertical-progress-bar-child"
                style = {{
                    "--barcolor": barcolor,
                    "--progress": progress + '%'
                }}>
                <div className="Vertical-progress-bar-text">{progress}%</div>
            </div>
        </div>
    )
}

export default VerticalProgressBar;