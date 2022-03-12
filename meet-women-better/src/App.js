import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";

import Prelogin from "./Components/Prelogin";
import Postlogin from "./Components/Postlogin01";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      {!loggedIn && <Prelogin onClose={() => setLoggedIn(true)} />}
      {loggedIn && <Postlogin />}
    </div>
  );
}

export default App;