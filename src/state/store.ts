import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "../features/now-playing/now-playing-slice";
import recentlyPlayedReducer from "../features/recently-played/recently-played-slice";
import authReducer from "../features/auth/auth-slice";
import queueReducer from "../features/queue/queue-slice";
import { spotifyApi } from "../features/now-playing/now-playing-api";

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
    recentlyPlayed: recentlyPlayedReducer,
    queue: queueReducer,
    auth: authReducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(spotifyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
