import React, { useState } from "react";

import logo from "./MWB-lg.png";
import "../App.css";

const LogPage = (props) => {


  return (
    <div className="App-log-page" >
      <body>
          today's log is very endless
      </body>
      <button onClick={props.onClose}>Done</button>
    </div>
  );
};

export default LogPage;