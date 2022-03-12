import React, { useState } from "react";

import logo from "./MWB-lg.png";
import "../App.css";

const Introspection = (props) => {

    return (
        <div className="App-introspection-page" >
          <body>
              today's introspection is very deep
          </body>
          <button onClick={props.onClose}>Done</button>
        </div>
      );
    };
    
export default Introspection;