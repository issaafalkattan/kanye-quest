import React from "react";

const LoadingScreen = () => {
  return (
      <div style={{background : 'white', width: '100%', height: '100%'}}>
      <img src="./immaLetYouFinish.gif" style={{ position: "fixed", top: "0", left: "0", width: "100%" }}/>
      </div>
      );
};

export default LoadingScreen;
