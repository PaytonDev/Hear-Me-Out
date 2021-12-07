import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "../features/music-player/music-player-slice";
import recentlyPlayedReducer from "../features/recently-played/recently-played-slice";
import queueReducer from "../features/queue/queue-slice";

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
    recentlyPlayed: recentlyPlayedReducer,
    queue: queueReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
