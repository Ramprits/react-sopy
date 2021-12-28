/* eslint-disable no-param-reassign */
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import agent from "api/agent";

export const authAdapter = createEntityAdapter({ selectId: (user) => user.id });

export const login = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
  try {
    const response = await agent.Auth.login(user);
    return response.user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: authAdapter.getInitialState({ loading: false, error: "", isAuthenticated: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      authAdapter.addOne(state, action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const homeActions = authSlice.actions;

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const getAuthState = (rootState) => rootState.auth;

export const selectAllAuth = createSelector(getAuthState, selectAll);

export const selectAuthEntities = createSelector(getAuthState, selectEntities);
export default authSlice.reducer;
