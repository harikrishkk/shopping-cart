import * as actions from './action-type';
import axios from 'axios';

export const loadAllMovies = () => (dispatch) => {
  dispatch({
    type: actions.LOAD_ALL_MOVIES,
  });
  axios.get('https://api.sampleapis.com/movies/animation').then((response) => {
    dispatch(loadAllMoviesSuccess(response.data));
  });
};
export const loadAllMoviesSuccess = (movies) => {
  return {
    type: actions.LOAD_ALL_MOVIES_SUCCESS,
    payload: {
      movies,
    },
  };
};
export const loadAllMoviesFail = (error) => {
  return {
    type: actions.LOAD_ALL_MOVIES_FAIL,
    payload: {
      error,
    },
  };
};

export const paginateMovies = () => {
  return {
    type: actions.PAGINATE_MOVIES,
  };
};

export const selectCurrentMovie = (id) => {
  return {
    type: actions.SET_CURRENT_MOVIE,
    payload: {
      id,
    },
  };
};
