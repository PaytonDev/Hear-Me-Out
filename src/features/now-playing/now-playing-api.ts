import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

const SPOTIFY_BASE_URL: string = "https://api.spotify.com/v1/";

const baseQuery = fetchBaseQuery({
  baseUrl: SPOTIFY_BASE_URL,
  prepareHeaders: (headers: Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const spotifyApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (searchQuery: string) => `search?q=${searchQuery}&type=artist,album,track&limit=4`,
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
      query: (id: string) => `albums/${id}/tracks`,
    }),
    getSong: builder.query({
      query: (id: string) => `tracks/${id}`,
    }),
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
