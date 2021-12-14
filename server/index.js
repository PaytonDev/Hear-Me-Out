const express = require("express");
const cors = require("cors");
const path = require("path");

// You need to create a credentials file to import your ID and SECRET KEY FROM
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

const PORT = process.env.PORT || 4000;

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "https://hear-me-out-43d23.web.app",
  scopes: "streaming user-read-email user-read-private",
};

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.get("/login", function (req, res) {
 
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${encodeURIComponent(
      credentials.clientId
    )}&redirect_uri=${encodeURIComponent(credentials.redirectUri)}&scope=${encodeURIComponent(
      credentials.scopes
    )}`
  );
});

app.post("/login", function (req, res) {
  let code = req.body.code;

  const spotifyApi = new spotifyWebApi(credentials)
  
  
  spotifyApi.authorizationCodeGrant(code)
  .then(function(response) {
    res.json({
      token: response.body.access_token,
      refresh: response.body.refresh_token,
      expiresIn: response.body.expires_in
    })

}).catch((err) => {
  res.sendStatus(400)
  console.log(err)
})
});

app.post("/refresh", (req, res) => {
  let refreshToken = req.body.refreshToken;

  let spotifyApi = new spotifyWebApi({
    clientId: credentials.clientID,
    clientSecret: credentials.clientSecret,
    redirectUri: credentials.redirectURI,
    refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
      console.warn(err);
    });
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
