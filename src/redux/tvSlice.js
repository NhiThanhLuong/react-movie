import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import tmdbApi, { tvType } from '@/api/tmdbApi';

export const fetchTvPopular = createAsyncThunk('tv/fetchTvPopular', async (params) => {
  return await tmdbApi.getTvList(tvType.popular, { params });
});

export const fetchTvToprated = createAsyncThunk('tv/fetchTvToprated', async (params) => {
  return await tmdbApi.getTvList(tvType.top_rated, { params });
});

const initialState = {};

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTvPopular.pending.type]: (state) => {
      state.loading = true;
      state.tvsPopular = [];
    },
    [fetchTvPopular.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.page = payload.page;
      state.tvsPopular = payload.results;
      state.total_pages = payload.total_pages;
    },
    [fetchTvToprated.pending.type]: (state) => {
      state.loading = true;
      state.tvsToprated = [];
    },
    [fetchTvToprated.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.page = payload.page;
      state.tvsToprated = payload.results;
      state.total_pages = payload.total_pages;
    },
  },
});

export default tvSlice.reducer;
