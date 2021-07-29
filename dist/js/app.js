"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
// import bodyParser from "body-parser";
var spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
var app = express_1.default();
var PORT = process.env.PORT || 4000;
var credentials = {
    clientId: "process.env.Client_ID",
    clientSecret: "process.env.CLIENT_SECRET",
    redirectUri: 'https://hear-me-out-spotify-api.herokuapp.com/'
};
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname,"..", "..", "client", "build")));
app.get('/', function (req, res) { return res.sendFile(path_1.default.resolve(__dirname, "build", "index.html")); });
app.post("/login", function (req, res) {
    var spotifyApi = new spotify_web_api_node_1.default(credentials);
    var code = req.body.code;
    spotifyApi.authorizationCodeGrant(code).then(function (data) {
        res.json({
            token: data.body.access_token,
            refresh: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});
app.post("/refresh", function (req, res) {
    var refreshToken = req.body.refreshToken;
    var spotifyApi = new spotify_web_api_node_1.default({
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        redirectUri: credentials.redirectUri,
        refreshToken: refreshToken
    });
    spotifyApi
        .refreshAccessToken()
        .then(function (data) {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        });
    })
        .catch(function (err) {
        res.sendStatus(400);
    });
});
app.listen(PORT, function () {
    return console.log("Server running on localhost:" + PORT);
});
