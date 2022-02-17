import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { heading, subHeading, children } = props;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold"> {heading} </h1>
          <p className="py-6"> {subHeading} </p>
          {children}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Hero;
