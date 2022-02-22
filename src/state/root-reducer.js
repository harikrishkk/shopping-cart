import { combineReducers } from 'redux';
import moviesReducer from '@state/movies/moviesReducer';

export default combineReducers({
  movies: moviesReducer,
});
