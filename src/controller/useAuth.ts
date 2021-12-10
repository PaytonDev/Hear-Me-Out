import { useEffect, useState } from "react";
import axios from "axios";

// Function used to return Access Token needed to make all other API Calls.

const useAuth = (code: string | null) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken] = useState<string>();
  const [expiresIn, setExpiresIn] = useState<number>();
  const data = {
    client_id: process.env.CLIENT_ID || "",
    client_secret: process.env.CLIENT_SECRET || "",
    redirect_URI: "http://localhost:3000/home",
    scope: "streaming user-read-email user-read-private",
  };

  useEffect(() => {
    if (!code) return;
		console.log(code)
    let authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " + Buffer.from(data.client_id + ":" + data.client_secret).toString("base64"),
      },
      json: true,
    };

		console.log(data.client_id)

    axios({
        url: authOptions.url,
				method: "POST",
				data: `code=${code}&redirect_uri=http://localhost:3000&grant_type=authorization_code`,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"Authorization": authOptions.headers.Authorization,
				},
		})
      .then((res) => {
				console.log(res.data)
        window.history.pushState({}, "", "/");
        setAccessToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code, data.client_id, data.client_secret]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    let interval = setInterval(() => {
      axios
        .post("/refresh", { refreshToken })
        .then((response) => {
          console.log(response.data);
          setAccessToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);
        })
        .catch(() => {
          window.location.href = "/";
        });
    }, (expiresIn - 120) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);
  return accessToken;
};

export default useAuth;
