import { type JsonValue } from '@prisma/client/runtime/library';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  interests: string[];
}

const initialState: UserState = {
  name: '',
  email: '',
  interests: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setInterests(state, action: PayloadAction<string[]>) {
      state.interests = action.payload;
    },
  },
});

export const { setName, setEmail, setInterests } = userSlice.actions;

export default userSlice.reducer;
