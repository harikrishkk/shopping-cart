import { INIT_STATE, reducer } from './reducer';
import AppUser from './AppUser';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const AppUsers = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_INIT',
    });
    axios
      .get(`https://reqres.in/api/users?page=${state.page}?delay=3`)
      .then((response) => {
        dispatch({
          type: 'FETCH_USER_SUCCESS',
          payload: {
            users: response.data.data,
            page: response.data.page,
            perPage: response.data.per_page,
            totalPages: response.data.total_pages,
          },
        });
      });
  }, [state.page]);

  const { users, totalPages, page } = state;

  const paginate = () => {
    dispatch({
      type: 'PAGINATE',
    });
  };

  if (!users.length) {
    return <h1> No users loaded</h1>;
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {users.map((user) => {
            return <AppUser key={user.id} user={user} />;
          })}
        </div>
        <div className="flex justify-center align-center mt-8">
          <div className="btn-group">
            {page < totalPages && (
              <button onClick={paginate} className="btn btn-sm">
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppUsers;
