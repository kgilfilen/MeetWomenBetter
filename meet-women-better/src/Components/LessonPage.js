import React, { useState, useEffect } from "react";

import logo from "./MWB-lg.png";
import "../App.css";

const LessonPage = (props) => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`http://192.168.86.93:3005/lessons`)
      .then((res) => res.json())
      .then(
        (result) => {
          setArticle(result);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching article: ", error);
          setError(error);
        }
      );
  }, []);

console.log(article)
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <body>today's lession is very bad</body>
      <div>
        <h3>
          <div>{article}</div>
        </h3>
        <img
          src={article?.coverUrl}
          alt={article?.title}
          style={{ width: "80%", margin: "0 auto" }}
        />
        <div>
            <h1>{article?.title}</h1>
            <h3>{article?.subtitle}</h3>
        </div>
      </div>
      <button onClick={props.onClose}>Done</button>
    </div>
  );
};

export default LessonPage;
