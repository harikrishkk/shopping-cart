import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    loaded: false,
    error: false,
    pages: 1,
    currentSelectedMovieId: null,
    isInitialLoad: true,
  },
  reducers: {
    loadAllMoviesInit: (state) => {
      state.loading = true;
    },
    loadAllMoviesSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.movies = action.payload;
      state.isInitialLoad = false;
    },
    paginateMovies: (state) => {
      state.pages = state.pages + 1;
    },
    setCurrentMovieId: (state, action) => {
      state.currentSelectedMovieId = action.payload;
    },
  },
});
export const {
  loadAllMoviesInit,
  loadAllMoviesSuccess,
  paginateMovies,
  setCurrentMovieId,
} = movieSlice.actions;

export const loadAllMovies = () => (dispatch) => {
  dispatch(loadAllMoviesInit);
  axios.get('https://api.sampleapis.com/movies/animation').then((response) => {
    console.log('rsp data', response.data);
    dispatch(loadAllMoviesSuccess(response.data));
  });
};

export default movieSlice.reducer;

// Selectors
const movieSliceSelector = (state) => state.movies;
export const selectAllMovies = createSelector(movieSliceSelector, (movies) => {
  const allMovies = movies.movies;
  const paginatedMovies = allMovies.slice(0, movies.pages * 10);
  return paginatedMovies;
});

export const selectMovieLoadingStatus = createSelector(
  movieSliceSelector,
  (movies) => movies.loading
);

export const selectMovieError = createSelector(
  movieSliceSelector,
  (movies) => movies.error
);

export const selectAllMoviesLoaded = createSelector(
  movieSliceSelector,
  (movies) => {
    const allMovies = movies.movies;
    const perPage = Math.floor(allMovies.length / 10);
    return allMovies.length > 0 && movies.pages >= perPage;
  }
);

export const selectMovieById = createSelector(movieSliceSelector, (movies) => {
  const allMovies = movies.movies;
  return allMovies.find((m) => m.id === movies.currentSelectedMovieId);
});

export const selectInitialLoad = createSelector(
  movieSliceSelector,
  (movies) => {
    return movies.isInitialLoad;
  }
);
