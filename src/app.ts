import express, { Express } from "express";
import cors from "cors"
import path from "path";
// import bodyParser from "body-parser";
import spotifyWebApi from "spotify-web-api-node";

const app: Express = express()

const PORT = process.env.PORT || 4000

const credentials  = {
    clientId: "process.env.Client_ID",
    clientSecret: "process.env.CLIENT_SECRET",
    redirectUri: 'https://hear-me-out-spotify-api.herokuapp.com/'
}

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get('/', (req: any, res: any) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.post("/login", function(req: any, res: any) {
    let spotifyApi = new spotifyWebApi(credentials)
    let code = req.body.code
    spotifyApi.authorizationCodeGrant(code).then((data: any) => {
        res.json({
            token : data.body.access_token,
            refresh : data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch((err: any) => {
        res.sendStatus(400)
    })
})

app.post("/refresh", (req: any, res: any) => {
    let refreshToken = req.body.refreshToken

    let spotifyApi = new spotifyWebApi({
        clientId: credentials.clientId,
        clientSecret:credentials.clientSecret,
        redirectUri: credentials.redirectUri,
        refreshToken
    })
    spotifyApi
        .refreshAccessToken()
        .then((data: any) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch((err: any) => {
            res.sendStatus(400);
        });
});

app.listen(PORT, () =>
console.log(`Server running on localhost:${PORT}`)
)