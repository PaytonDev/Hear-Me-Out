import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicPlayerState {
  currentSong: SongObj;
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
  name: "music",
  initialState,
  reducers: {
    playedSong(state, action: PayloadAction<any>) {
      return (state.currentSong = action.payload);
    },
  },
});

export const { playedSong } = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
