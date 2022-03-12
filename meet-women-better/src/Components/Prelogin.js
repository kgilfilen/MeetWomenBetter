import React, { useState } from 'react';

import logo from './MWB-lg.png';
import '../App.css';


const Prelogin = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [loginShow, setLoginShow] = useState(false)
  
    const startLogin = () => {
      setLoginShow(true)
    }
  
    return (
    <div className="App" >
      <header className='App-header'>Meet Women Better</header>

      <body className="App-body">
        <img src={logo} />
        <p className='App-paragraph'>
        You can pay huge $$ for a weekend seminar, and then forget everything you learned within a week, and be very frustrated. Real change takes regular action over time. Subscribe today to receive weekly instruction and challenges that will get you out in the wild, to get into practice with convo, flexibility, and leadership, and to better understand women so you can do better with the opportunities we all have every day.

        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/1138145983259743"
          target="_blank"
          rel="noopener noreferrer"
        >We do work here, we chat on MWB @ Facebook</a>
        <div className='App-spacer'></div>
        {!loggedIn && <button className='App-login-button' onClick={props.onClose}>Login</button> }
      </body>
    
    </div>
    );
}

export default Prelogin
