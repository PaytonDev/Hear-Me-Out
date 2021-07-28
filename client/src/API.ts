import axios, { AxiosResponse } from "axios";
const spotifyUrl: string = "https://api.spotify.com/v1/" 
// Functions for Spotify API Calls



export const getSearchResults = async (query: string, token: string | undefined): Promise<AxiosResponse> => {
    const modifiedQuery: string = query.replaceAll(" ", "+")

        try {
            const results: AxiosResponse = await axios.get(
                spotifyUrl + `search?q=${modifiedQuery}&type=artist,album,track&limit=4`
            , {headers: {Authorization: `Bearer ${token}`}})
            return results
        } catch (err) {
            throw new Error(err)
        }
    }


// These below are virtually the same function. Please refactor.
export const getAlbum = async (id: string, token: string | undefined): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `albums/${id}`
        , {headers: {Authorization: `Bearer ${token}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}


export const getAlbumSongs = async (id: string, token: string | undefined) => {
    try {
        const results: any = await axios.get(
            spotifyUrl + `albums/${id}/tracks`
        , {headers: {Authorization: `Bearer ${token}`}})
        return results
    } catch (err) {
         console.log(err)
    }
}


export const getArtist = async (id: string, token: string | undefined): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `artists/${id}`
        , {headers: {Authorization: `Bearer ${token}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}

export const getArtistAlbums = async (id: string, token: string | undefined): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `artists/${id}/albums`
        , {headers: {Authorization: `Bearer ${token}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}


export const getSong = async (id: string, token: string | undefined): Promise<AxiosResponse> => {
    try {
        const results: AxiosResponse = await axios.get(
            spotifyUrl + `tracks/${id}`
        , {headers: {Authorization: `Bearer ${token}`}})
        return results
    } catch (err) {
        throw new Error(err)
    }
}

