import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueueState {
  queue: Song[] | object[];
}

const initialState: QueueState = {
  queue: [{}],
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    addQueueSong(state, action: PayloadAction<Song>) {
      state.queue.push(action.payload);
      return state;
    },
    removeQueueSong(state) {
      state.queue.pop();
      return state;
    },
  },
});

export const { addQueueSong, removeQueueSong } = queueSlice.actions;
export default queueSlice.reducer;
