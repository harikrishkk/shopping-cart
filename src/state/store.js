import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '@state/movies/moviesSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});
