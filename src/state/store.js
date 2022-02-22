import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '@state/movies/moviesSlice';
import usersReducer from '@state/users/usersSlice';
export default configureStore({
  reducer: {
    movies: movieReducer,
    users: usersReducer,
  },
});
