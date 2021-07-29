interface IUser {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    recent_artist?: string[];
    recent_album?: string[];
    recent_song?: string[];
}

interface UserProps {
    user: IUser
}

type APIDataType = {
    message: string;
    status: string;
    users: IUser[];
    user: IUser
}

type SpotifySearchDataType = {
    message: string;
    status: string;
    results: []
}

type Artist = {
    name: string;
    images: [Image];
    external_urls: External_Urls;
    followers: Followers;
    href: string;
    popularity: number;
    uri: string;
    id: string;
}

type Album = {
    album_type: string;
    artists: [Artist];
    available_markets: string[];
    external_urls: External_Urls;
    href: string;
    id: string;
    images:[Image];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

type Song = {
    album: Album;
    artist: [Artist];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: External_Ids;
    name: string;
    href: string;
    id: string;
    preview_url: string;
    is_local: boolean;
    track_number: boolean;
    type: string;
    uri: string;
    isPlaying: boolean;
}

type Image = {
    height: number;
    url: string;
    width: number;
}

type External_Urls = {
    spotify: string;
}

type Followers = {
    href: null;
    total: number;
}

type External_Ids = {
    isrc: string;
}

declare module 'express'
declare module 'cors'
declare module 'spotify-web-api-node'