import { Handler } from "@netlify/functions";
import SpotifyWebApi from "spotify-web-api-node";

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "https://hear-me-out.netlify.app/",
  scopes: "streaming user-read-email user-read-private",
};

const spotifyApi = new SpotifyWebApi(credentials);

const handler: Handler = async (event, context) => {
  const body = JSON.parse(event.body);

  try {
    const response: any = await spotifyApi.authorizationCodeGrant(body.code);
    const data = await response;
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch token" }),
    };
  }
};

export { handler };
