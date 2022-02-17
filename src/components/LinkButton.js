import React from 'react';

const LinkButton = ({ handleClick }) => {
  return (
    <a
      onClick={handleClick}
      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    >
      Learn More
      <svg
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  );
};

export default LinkButton;
