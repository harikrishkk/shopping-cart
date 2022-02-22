import { combineReducers } from 'redux';
import movies from '@state/movies/moviesSlice';

export default combineReducers({
  movies,
});
