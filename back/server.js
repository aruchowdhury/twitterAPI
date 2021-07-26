const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const request = require("request");
const path = require("path");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const get = util.promisify(request.get);

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Method", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let getTweet = async (req, res, streamURL) => {
  const requestConfig = {
    url: streamURL,
    auth: {
      bearer: BEARER_TOKEN,
    },
    json: true,
  };

  try {
    const response = await get(requestConfig);

    if (response.statusCode !== 200) {
      throw new Error(response.body.error.message);
    }
    res.send(response.body.data);
  } catch (e) {
    res.send(e);
  }
};

app.get("/api/tweet/Joe-Biden", async (req, res) => {
  const streamURL = new URL(
    "https://api.twitter.com/2/users/1349149096909668363/tweets?pagination_token=7140dibdnow9c7btw3z16xcn54ryhshh2zyfxg4lctfeh&tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=20"
  );
  return getTweet(req, res, streamURL);
});

app.get("/api/tweet/Hilari-Clinton", async (req, res) => {
  const streamURL = new URL(
    "https://api.twitter.com/2/users/1339835893/tweets?pagination_token=7140dibdnow9c7btw3z16xcn54ryhshh2zyfxg4lctfeh&tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=20"
  );
  return getTweet(req, res, streamURL);
});

app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
