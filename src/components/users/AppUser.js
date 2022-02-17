import React from 'react';

const AppUser = ({ user }) => {
  const { email, first_name, last_name, avatar } = user;
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-white p-6">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={avatar}
          alt={first_name}
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {last_name}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {first_name}
        </h2>
        <p className="leading-relaxed text-base">{email}</p>
      </div>
    </div>
  );
};

export default AppUser;
