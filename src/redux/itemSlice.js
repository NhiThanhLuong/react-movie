import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tmdbApi from '@/api/tmdbApi';

export const fetchMovieItem = createAsyncThunk('item/fetchMovieItem', async (params) => {
  return await tmdbApi.getMoviesList(...params);
});

export const fetchTvItem = createAsyncThunk('item/fetchTvItem', async (params) => {
  return await tmdbApi.getTvList(...params);
});

export const fetchSearch = createAsyncThunk('item/fetchSearch', async (params) => {
  return await tmdbApi.search(...params);
});

export const fetchLoadMoreMovieItem = createAsyncThunk(
  'item/fetchLoadMoreMovieItem',
  async (params) => {
    return await tmdbApi.getMoviesList(...params);
  }
);

export const fetchLoadMoreTvItem = createAsyncThunk('item/fetchLoadMoreTvItem', async (params) => {
  return await tmdbApi.getTvList(...params);
});

export const fetchLoadMoreSearch = createAsyncThunk('item/fetchLoadMoreSearch', async (params) => {
  return await tmdbApi.search(...params);
});

export const fetchSimilar = createAsyncThunk('item/fetchSimilar', async (params) => {
  return await tmdbApi.similar(...params);
});

export const fetchDetail = createAsyncThunk('item/fetchDetail', async (params) => {
  return await tmdbApi.detail(...params);
});

const initialState = {
  page: 1,
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieItem.pending.type]: (state) => {
      state.loading = true;
      state.items = [];
    },
    [fetchMovieItem.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchTvItem.pending.type]: (state) => {
      state.loading = true;
      state.items = [];
    },
    [fetchTvItem.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchSearch.pending.type]: (state) => {
      state.loading = true;
      state.items = [];
    },
    [fetchSearch.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchLoadMoreMovieItem.pending.type]: (state) => {
      state.loading = true;
      state.items = state.items || [];
    },
    [fetchLoadMoreMovieItem.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = [...state.items, ...payload.results];
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchLoadMoreTvItem.pending.type]: (state) => {
      state.loading = true;
      state.items = state.items || [];
    },
    [fetchLoadMoreTvItem.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = [...state.items, ...payload.results];
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchLoadMoreSearch.pending.type]: (state) => {
      state.loading = true;
      state.items = state.items || [];
    },
    [fetchLoadMoreSearch.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = [...state.items, ...payload.results];
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchSimilar.pending.type]: (state) => {
      state.loading = true;
      state.items = state.items || [];
    },
    [fetchSimilar.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
    },
    [fetchDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchDetail.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.item = payload;
    },
  },
});

export default itemSlice.reducer;
