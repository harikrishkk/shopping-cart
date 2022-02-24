import AppUser from './AppUser';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllUsers,
  paginateUsers,
  selectAllUsers,
  selectTotalPages,
  selectCurrentPage,
  selectIsInitialLoad,
} from '@state/users/usersSlice';

const AppUsers = () => {
  const users = useSelector(selectAllUsers);
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const initialLoad = useSelector(selectIsInitialLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      dispatch(loadAllUsers());
    }
  }, [initialLoad, dispatch]);

  const paginate = () => {
    dispatch(paginateUsers());
    dispatch(loadAllUsers());
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
