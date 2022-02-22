import * as actions from './action-type';
import { createSelector } from 'reselect';

const INITIAL_STATE = {
  movies: [],
  loading: false,
  loaded: false,
  error: false,
  pages: 1,
  currentSelectedMovieId: null,
  isInitialLoad: true,
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOAD_ALL_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case actions.LOAD_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        movies: action.payload.movies,
        isInitialLoad: false,
      };
    case actions.LOAD_ALL_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.LOAD_ALL_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.PAGINATE_MOVIES:
      return {
        ...state,
        pages: state.pages + 1,
      };
    case actions.SET_CURRENT_MOVIE:
      return {
        ...state,
        currentSelectedMovieId: action.payload.id,
      };
    default:
      return state;
  }
}

// Selectors
const movieSlice = (state) => state.movies;
export const selectAllMovies = createSelector(movieSlice, (movies) => {
  const allMovies = movies.movies;
  const paginatedMovies = allMovies.slice(0, movies.pages * 10);
  return paginatedMovies;
});

export const selectMovieLoadingStatus = createSelector(
  movieSlice,
  (movies) => movies.loading
);

export const selectMovieError = createSelector(
  movieSlice,
  (movies) => movies.error
);

export const selectAllMoviesLoaded = createSelector(movieSlice, (movies) => {
  const allMovies = movies.movies;
  const perPage = Math.floor(allMovies.length / 10);
  return allMovies.length > 0 && movies.pages >= perPage;
});

export const selectMovieById = createSelector(movieSlice, (movies) => {
  const allMovies = movies.movies;
  return allMovies.find((m) => m.id === movies.currentSelectedMovieId);
});

export const selectInitialLoad = createSelector(movieSlice, (movies) => {
  return movies.isInitialLoad;
});
