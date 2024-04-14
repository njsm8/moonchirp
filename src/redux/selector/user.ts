import { type RootState } from '../store';

export const selectUser = (state: RootState) => state.userReducer.email;
export const selectInterests = (state: RootState) =>
  state.userReducer.interests;
export const selectName = (state: RootState) => state.userReducer.name;
