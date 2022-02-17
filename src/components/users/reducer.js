export const INIT_STATE = {
  users: [],
  page: 1,
  loading: false,
  loaded: false,
  perPage: 0,
  totalPages: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_INIT': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...state.users, ...action.payload.users],
        page: action.payload.page,
        perPage: action.payload.perPage,
        totalPages: action.payload.totalPages,
      };
    }

    case 'PAGINATE': {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    default:
      return state;
  }
};
