import React from "react";
import rP from "../public/img/banner.png";
import "./App.scss";

const App = () => {
  return (
    <div className="starter-styles">
      <img src={rP} width={700} />
      <h3 className="starter-styles__heading">
        Starter Template for React with Parcel.js
      </h3>
      <p className="starter-styles__text">
        Edit the src folder to make changes
      </p>
    </div>
  );
};

export default App;
