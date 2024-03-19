import React from 'react';
  
const ProgressBar = ({barcolor, bgcolor, progress}) => {
     
    const Parentdiv = {
        height: '100%',
        width: '100%',
        backgroundColor: bgcolor,
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: barcolor,
        borderRadius: 40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <div style={progresstext}></div>
        </div>
      </div>
    )
}
  
export default ProgressBar;