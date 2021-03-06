import { useEffect, useState } from "react";
import axios from "axios";


// Function used to return Access Token needed to make all other API Calls.
export const code = new URLSearchParams(window.location.search).get("code");

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken] = useState<string>();
  const [expiresIn, setExpiresIn] = useState<number>();

  useEffect(() => {
    if (!code) return;

    try {
      fetch('/api/get-token', {
        method: 'POST',
        body: JSON.stringify({ code }),
      }).then((res: any) => (
        res.json()
      )).then(function(data: any) {
        window.history.pushState({}, '', '/');
        setAccessToken(data.data.body.access_token);
      })
    } catch (error) {
      console.log(error)
    }

    // axios.post("/login", { code })
    //   .then((res) => {
    //     window.history.pushState({}, "", "/");
    //     setAccessToken(res.data.token);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

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
