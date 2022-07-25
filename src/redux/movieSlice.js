import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import tmdbApi, { movieType } from '@/api/tmdbApi';

export const fetchMoviePopular = createAsyncThunk('movie/fetchMoviePopular', async (params) => {
  return await tmdbApi.getMoviesList(movieType.popular, { params });
});

export const fetchMovieToprated = createAsyncThunk('movie/fetchMovieToprated', async (params) => {
  return await tmdbApi.getMoviesList(movieType.top_rated, { params });
});

const initialState = {};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMoviePopular.pending.type]: (state) => {
      state.loading = true;
      state.moviesPopular = [];
    },
    [fetchMoviePopular.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.page = payload.page;
      state.moviesPopular = payload.results;
      state.total_pages = payload.total_pages;
    },
    [fetchMovieToprated.pending.type]: (state) => {
      state.loading = true;
      state.moviesToprated = [];
    },
    [fetchMovieToprated.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.page = payload.page;
      state.moviesToprated = payload.results;
      state.total_pages = payload.total_pages;
    },
  },
});

export default movieSlice.reducer;
