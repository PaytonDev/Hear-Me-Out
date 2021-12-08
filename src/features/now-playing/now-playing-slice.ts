import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Need to update the names to nowPlaying

interface NowPlayingState {
  currentSong: SongObj;
  currentArtist: Artist | {};
  currentAlbum: Album | {};
  isPlaying: boolean;
}

const initialState = {
  currentSong: {
    song_audio: null,
    song_details: {},
  },
  currentAlbum: {},
  currentArtist: {},
  isPlaying: false,
} as NowPlayingState;

const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    selectedSong: (state, action: PayloadAction<any>) => {
      state.currentSong = action.payload;
    },
    playSong: (state, action: PayloadAction<any>) => {
      state.currentSong = action.payload;
      state.currentSong.song_audio?.play();
      state.isPlaying = true;
    },
    pauseSong: (state) => {
      state.currentSong.song_audio?.pause();
      state.isPlaying = false;
    },
    selectedAlbum: (state, action: PayloadAction<any>) => {
      state.currentAlbum = action.payload;
    },
  },
});

export const { selectedSong, playSong, pauseSong } = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
