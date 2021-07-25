import axios, { AxiosResponse } from "axios";

const userUrlDB: string = "http://localhost:4000"
const spotifyUrl: string = "https://api.spotify.com/v1/" 
const ACCESS_TOKEN: string = 'BQBaHW615egJXk1n1bVlE-ik6v_MYIwGTUvbpPONMa9tsOIBF53f25i2eZeB38XyZ37ZWAIdyr6IEHTJVwY';


export const getUser = async (id: number): Promise<AxiosResponse<APIDataType>> => {
    try {
        const user: AxiosResponse<APIDataType> = await axios.get(
            userUrlDB + `/user/${id}`
        )
        return user
    } catch (err) {
        throw new Error(err)
    }
}

export const addUser = async (
    formData: IUser
): Promise<AxiosResponse<APIDataType>> => {
    try {
        const user: Omit<IUser, "_id"> = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: formData.password,
            recent_album: formData.recent_album,
            recent_artist: formData.recent_artist,
            recent_song: formData.recent_song,
        }
        
        const saveUser: AxiosResponse<APIDataType> = await axios.post(
            userUrlDB + "/register",
            user
        )
        return saveUser
    } catch (err) {
        throw new Error(err)
    }
}

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

