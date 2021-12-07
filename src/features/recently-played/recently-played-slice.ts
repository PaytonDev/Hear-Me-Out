import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecentlyPlayedState {
  recentlyPlayed: Song[] | object[];
}

const initialState: RecentlyPlayedState = {
  recentlyPlayed: [{}],
};

const recentlyPlayedSlice = createSlice({
  name: "recentlyPlayed",
  initialState,
  reducers: {
    addRecentSong(state, action: PayloadAction<Song>) {
      state.recentlyPlayed.push(action.payload);
      return state;
    },
    removeRecentSong(state) {
      state.recentlyPlayed.pop();
      return state;
    },
  },
});

export const { addRecentSong, removeRecentSong } = recentlyPlayedSlice.actions;
export default recentlyPlayedSlice.reducer;
