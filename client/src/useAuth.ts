import { useEffect, useState } from "react";
import axios from "axios";


const useAuth = (code: string | null)=> {
    const [accessToken, setAccessToken] = useState<string>();
    const [refreshToken] = useState<string>();
    const [expiresIn, setExpiresIn] = useState<number>();
    const instance = axios.create({baseURL: "http://localhost:4000"})

    useEffect(() => {
        if (!code) return
        instance.post('/login', {code})
            .then((res) => {
                window.history.pushState({}, '', "/");
                setAccessToken(res.data.token);
            })
            .catch((err) => {
                console.log('Not sure what this error is so I really hope you bring it up', err)
            });
    }, [code, instance])


    useEffect(() => {
        if (!refreshToken || !expiresIn) return

        let interval = setInterval(() => {
            instance.post('/refresh', { refreshToken })
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

    }, [refreshToken, expiresIn, instance])
    return accessToken
}

export default useAuth