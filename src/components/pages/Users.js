import React from 'react';
import AppUsers from '@components/users/AppUsers';

const Users = () => {
  return (
    <div className="container px-5 py-12 mx-auto">
      <h2 className="text-2xl mb-6 font-bold"> Users </h2>
      <AppUsers />
    </div>
  );
};

export default Users;
