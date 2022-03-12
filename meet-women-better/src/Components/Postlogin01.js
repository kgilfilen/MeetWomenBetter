import React, { useState } from "react";

import LessonPage from './LessonPage'
import ChallengePage from './ChallengePage'
import LogPage from "./Log";
import IntrospectionPage from "./IntrospectionPage";
import logo from "./MWB-lg.png";
import "../App.css";

const Postlogin01 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [textChange, handleChange] = useState(false);
  const [textSubmit, handleSubmit] = useState(false);

  const startLogin = () => {
    setLoginShow(true);
  };

  const [showLesson, setShowLesson] = useState(false)
  const startShowLesson = () => {
    setShowLesson(true)
  }
  const endShowLesson = () => {
      setShowLesson(false)
  }

  const [showChallenge, setShowChallenge] = useState(false)
  const startShowChallenge = () => {
    setShowChallenge(true)
  }
  const endShowChallenge = () => {
      setShowChallenge(false)
  }

  const [showLog, setShowLog] = useState(false)
  const startShowLog = () => {
    setShowLog(true)
  }
  const endShowLog = () => {
      setShowLog(false)
  }

  const [showIntrospection, setShowIntrospection] = useState(false)
  const startShowIntrospection = () => {
    setShowIntrospection(true)
  }
  const endShowIntrospection = () => {
      setShowIntrospection(false)
  }


  return (
    <div className="App-text-header">
      <header className="App-header">Meet Women Better</header>
      <body >
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lesson</th>
              <th>Challenge</th>
              <th>Log</th>
              <th>Introspection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>May 22, 2022</td>
              <td onClick={startShowLesson} >Body Language - physical touch</td>
              <td onClick={startShowChallenge} >Body Language - ladder</td>
              <td onClick={startShowLog} >May 22, 2022</td>
              <td onClick={startShowIntrospection} >May 22, 2022</td>
            </tr>
          </tbody>
        </table>
      </body>
      {showLesson && <LessonPage onClose={endShowLesson} />}
      {showChallenge && <ChallengePage onClose={endShowChallenge} />}
      {showLog && <LogPage onClose={endShowLog} />}
      {showIntrospection && <IntrospectionPage onClose={endShowIntrospection} />}
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

export default Postlogin01;
