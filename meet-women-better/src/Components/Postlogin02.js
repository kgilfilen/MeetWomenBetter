import React, { useState } from "react";

import logo from "./MWB-lg.png";
import "../App.css";

const Postlogin02 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [textChange, handleChange] = useState(false);
  const [textSubmit, handleSubmit] = useState(false);

  const startLogin = () => {
    setLoginShow(true);
  };

  return (
    <div className="App-text-header">
              <header className='App-header'>Meet Women Better</header>

      <div className="App-text-page">
        <button className="App-textinput-button" >Lesson</button>
        <button className="App-textinput-button">Challenge</button>
        <button className="App-textinput-button">Log</button>
        <button className="App-textinput-button">Introspection</button>
      </div>
      <body className="App-body-page2">
        <a
          className="App-link"
          href="https://www.facebook.com/groups/1138145983259743"
          target="_blank"
          rel="noopener noreferrer"
        >
          We do work here, we chat on MWB @ Facebook
        </a>
        <div className="App-spacer"></div>
      </body>
    </div>
  );
};

export default Postlogin02;
