import React, { useState, useEffect } from "react";
import { PropTypes } from 'prop-types'
import "./Login.css";

let loginResponse = null
  async function loginUser(credentials) {
      return fetch(`http://192.168.86.93:3005/login`,  {
          method: "POST",
          headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      }).then(function(response) {
          if (response.status !== 200) {throw new Error(response.status)}

      }).then(res => res.json())
      .then(result => {
        loginResponse = result.body
      })
  }

const Login = ({setToken}) => {
  const [username, setUsername] = useState();
  const [password,setPassword] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({username,password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p> Username </p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
