import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Moment from "react-moment";
import "moment-timezone";

const HilariClinton = () => {
  const { tweet, setTweet } = useContext(AppContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tweet/Hilari-Clinton")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweet(data);
      });
  }, [setTweet]);

  return (
    <div class="mx-10 lg:mx-60 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {tweet.map((t) => {
        return (
          <div
            class="bg-purple-300 hover:bg-purple-400 shadow-xl rounded-xl p-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            key={t.id}
          >
            <ul>
              <li class="text-xl font-semibold ">
                Created At:
                <Moment parse="YYYY-MM-DD HH:mm">{t.created_at}</Moment>
              </li>
              <li class=" text-lg font-medium">
                Tweet: <span>{t.text}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HilariClinton;
