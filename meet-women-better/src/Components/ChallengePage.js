import React, { useState } from "react";

import logo from "./MWB-lg.png";
import "../App.css";

const ChallengePage = (props) => {


  return (
    <div className="App-challenge-page" >
      <body>
          today's challenge is very brutal
      </body>
      <button onClick={props.onClose}>Done</button>
    </div>
  );
};

export default ChallengePage;