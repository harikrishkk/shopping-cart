import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { apiReducer, INIT_STATE } from '@api/apiReducer';

const useHttp = (url, flag) => {
  const [state, dispatch] = useReducer(apiReducer, INIT_STATE);
  useEffect(() => {
    let timeoutId = null;
    if (flag) {
      dispatch({
        type: 'FETCH_DATA_INIT',
      });
      axios.get(url).then((response) => {
        timeoutId = setTimeout(() => {
          dispatch({
            type: 'FETCH_DATA_SUCCESS',
            payload: {
              data: response.data,
            },
          });
        }, 1000);
      });
    }
    return () => {
      clearInterval(timeoutId);
    };
  }, [flag]);
  return {
    state,
  };
};

export default useHttp;
