import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    loaded: false,
    error: false,
    page: 1,
    perPage: 0,
    totalPages: 0,
    isInitialLoad: true,
  },
  reducers: {
    loadAllUsersInit: (state) => {
      state.loading = true;
    },
    loadAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.users = [...state.users, ...action.payload.users];
      state.perPage = action.payload.perPage;
      state.totalPages = action.payload.totalPages;
      state.isInitialLoad = false;
    },
    paginateUsers: (state) => {
      state.page = state.page + 1;
    },
  },
});
export const {
  loadAllUsersInit,
  loadAllUsersSuccess,
  paginateUsers,
} = usersSlice.actions;

export const loadAllUsers = () => (dispatch, getState) => {
  dispatch(loadAllUsersInit);
  const page = getState().users.page;
  axios
    .get(`https://reqres.in/api/users?page=${page}?delay=3`)
    .then((response) => {
      console.log(response);
      dispatch(
        loadAllUsersSuccess({
          users: response.data.data,
          totalPages: response.data.total_pages,
          perPage: response.data.per_page,
        })
      );
    });
};
export default usersSlice.reducer;

const usersSliceSelector = (state) => state.users;

export const selectAllUsers = createSelector(usersSliceSelector, (users) => {
  const allUsers = users.users;
  return allUsers;
});

export const selectTotalPages = createSelector(usersSliceSelector, (users) => {
  return users.totalPages;
});

export const selectCurrentPage = createSelector(usersSliceSelector, (users) => {
  return users.page;
});

export const selectIsInitialLoad = createSelector(
  usersSliceSelector,
  (users) => {
    return users.isInitialLoad;
  }
);
