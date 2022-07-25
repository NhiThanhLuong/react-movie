import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './movieSlice';
import tvReducer from './tvSlice';
import itemReducer from './itemSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    item: itemReducer,
  },
});

export default store;
