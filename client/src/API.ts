import axios, { AxiosResponse } from "axios";
const spotifyUrl: string = "https://api.spotify.com/v1/" 
const ACCESS_TOKEN: string = 'BQBaHW615egJXk1n1bVlE-ik6v_MYIwGTUvbpPONMa9tsOIBF53f25i2eZeB38XyZ37ZWAIdyr6IEHTJVwY';

// Functions for Spotify API Calls


export const getSearchResults = async (query: string): Promise<AxiosResponse> => {
    const modifiedQuery: string = query.replaceAll(" ", "+")
        try {
            const results: AxiosResponse = await axios.get(
                spotifyUrl + `search?q=${modifiedQuery}&type=artist,album,track&limit=4`
            , {headers: {Authorization: `Bearer ${ACCESS_TOKEN}`}})
            return results
        } catch (err) {
            throw new Error(err)
        }
    }


// These below are virtually the same function. Please refactor.
export const getAlbum = async (id: string): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `albums/${id}`
        , {headers: {Authorization: `Bearer ${ACCESS_TOKEN}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}


export const getAlbumSongs = async (id: string): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `albums/${id}/tracks`
        , {headers: {Authorization: `Bearer ${ACCESS_TOKEN}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}


export const getArtist = async (id: string): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `artist/${id}`
        , {headers: {Authorization: `Bearer ${ACCESS_TOKEN}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}


export const getSong = async (id: string): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `tracks/${id}`
        , {headers: {Authorization: `Bearer ${ACCESS_TOKEN}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}

