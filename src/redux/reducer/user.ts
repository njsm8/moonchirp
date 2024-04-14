import {
  createAction,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  interests: string[];
  verified: boolean;
  cachedInterests: string[];
}

const initialState: UserState = {
  name: '',
  email: '',
  interests: [],
  verified: false,
  cachedInterests: [],
};

const logout = createAction('logout');

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
    setVerified(state, action: PayloadAction<boolean>) {
      state.verified = action.payload;
    },
    setCachedInterests(state, action: PayloadAction<string[]>) {
      state.cachedInterests = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {
  setName,
  setEmail,
  setInterests,
  setVerified,
  setCachedInterests,
} = userSlice.actions;

export default userSlice.reducer;
