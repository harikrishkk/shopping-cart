export const INIT_STATE = {
  data: [],
  loaded: false,
  loading: false,
};

export const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA_INIT': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'FETCH_DATA_SUCCESS': {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
      };
    }

    default:
      return state;
  }
};
