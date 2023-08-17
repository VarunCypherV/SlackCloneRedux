import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    roomId:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom:(state,action)=>{
      state.roomId = action.payload.roomId;
    }
  },
});

export const { enterRoom } = appSlice.actions;

export const selectroomId = (state) => state.app.roomId;

export default appSlice.reducer;
