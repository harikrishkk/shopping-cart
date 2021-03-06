import React, { useContext } from 'react';
import AuthContext from '@context/auth-context';
import Logo from '@shared/Logo';
const Banner = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:py-20 bg-indigo-600">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <Logo />
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none text-white sm:text-4xl md:mx-auto tracking-wider">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="white"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-white tracking-wider">The</span>
              </span>{' '}
              One stop shop for all music!
            </h2>
            <p className="text-base text-white md:text-lg tracking-wider">
              Bands, Jamming, Covers, TV Shows, Musics, Atrists, Tickets..
            </p>
          </div>
          <div>
            {isAuthenticated && (
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Read More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
