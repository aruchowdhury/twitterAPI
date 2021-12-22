import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import TweetCard from "./TweetCard";
const JoeBiden = () => {
  //Receiving states using react context
  const { tweet, setTweet } = useContext(AppContext);

  // Fetching data at the time of screen load using useEffect and fetch
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tweet/biden")
      .then((res) => res.json())
      .then((data) => {
        setTweet(data);
      });
  }, [setTweet]);
  //Used map to display fetch data and styled using TailwindCSS
  return (
    <div class=" mx-10 lg:mx-60 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {tweet.map((t) => {
        return <TweetCard key={t.id} tweets={t} />;
      })}
    </div>
  );
};

export default JoeBiden;
