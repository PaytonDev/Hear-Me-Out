import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Need to update the names to nowPlaying

interface MusicPlayerState {
  currentSong: object;
  isPlaying: boolean;
}

const initialState: MusicPlayerState = {
  currentSong: {
    song_audio: null,
    song_details: {},
  },
  isPlaying: false,
};

const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    selectedSong(state, action: PayloadAction<any>) {
      return (state.currentSong = action.payload);
    },
  },
});

export const { selectedSong } = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
