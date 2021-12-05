import { useEffect, useState } from "react";
import axios from "axios";

// Function used to return Access Token needed to make all other API Calls.

const useAuth = (code: string | null) => {
    const [accessToken, setAccessToken] = useState<string>();
    const [refreshToken] = useState<string>();
    const [expiresIn, setExpiresIn] = useState<number>();


    useEffect(() => {
        if (!code) return
        axios.post('http://localhost:4000/login', {code})
            .then((res) => {
                window.history.pushState({}, '', "/");
                setAccessToken(res.data.token);
            })
            .catch((err) => {
                console.log( err)
            });
    }, [code])


    useEffect(() => {
        if (!refreshToken || !expiresIn) return

        let interval = setInterval(() => {
            axios.post('/refresh', { refreshToken })
            .then((response) => {
                console.log(response.data)
                setAccessToken(response.data.accessToken)
                setExpiresIn(response.data.expiresIn)
            })
            .catch(() => {
                window.location.href = "/"
            });

        }, (expiresIn - 120) * 1000);

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])
    return accessToken
}

export default useAuth