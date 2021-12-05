import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "../features/music-player/music-player-slice";

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
