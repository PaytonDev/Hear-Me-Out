import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../state/store";

const SPOTIFY_BASE_URL: string = "https://api.spotify.com/v1/";

const baseQuery = fetchBaseQuery({
  baseUrl: SPOTIFY_BASE_URL,
  prepareHeaders: (headers: Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log("api token", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const spotifyApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (searchQuery: string) =>
        searchQuery ? `search?q=${searchQuery}&type=artist,album,track&limit=4` : "",
    }),
    getAlbum: builder.query({
      query: (id: string) => `albums/${id}`,
    }),
    getAlbumSongs: builder.query({
      query: (id: string) => `albums/${id}/tracks`,
    }),
    getArtist: builder.query({
      query: (id: string) => `artists/${id}`,
    }),
    getArtistTopSongs: builder.query({
      query: (id: string) => `artists/${id}/top-tracks`,
    }),
    getArtistAlbums: builder.query({
      query: (id: string) => `artists/${id}/albums`,
    }),
    getSong: builder.query({
      query: (id: string) => `tracks/${id}`,
    }),
    // getAlbumsandTopSongs: builder.query({
    //   async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
    //     let songsAndAlbums: { songs: any; albums: any } = {
    //       songs: {},
    //       albums: {},
    //     };
    //     songsAndAlbums.songs = await fetchWithBQ(`artists/${id}/top-tracks`);
    //     if (songsAndAlbums.songs.error) throw songsAndAlbums.songs.error;
    //     songsAndAlbums.albums = await fetchWithBQ(`artists/${id}/albums`);
    //     if (songsAndAlbums.albums.error) throw songsAndAlbums.albums.error;

    //     return;
    //   },
    // }),
  }),
});

export const {
  useGetSearchResultsQuery,
  useGetAlbumQuery,
  useGetArtistQuery,
  useGetAlbumSongsQuery,
  useGetArtistTopSongsQuery,
  useGetArtistAlbumsQuery,
  useGetSongQuery,
} = spotifyApi;
