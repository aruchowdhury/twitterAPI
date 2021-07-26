import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

const JoeBiden = () => {
  const { tweet, setTweet } = useContext(AppContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/tweet/Joe-Biden")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweet(data);
      });
  }, []);

  return (
    <div>
      {tweet.map((t) => {
        return (
          <div key={t.id}>
            <ul>
              <li>
                Created At: <span>{t.created_at}</span>
              </li>
              <li>
                Tweet: <span>{t.text}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default JoeBiden;
