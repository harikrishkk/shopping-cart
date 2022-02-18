import React from 'react';
import { Link } from 'react-router-dom';
const NoFound = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://picsum.photos/720/600"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            You are in the wrong place I guess!
          </h1>
          <p className="mb-8 leading-relaxed">
            If you wanna see some cool random pics, stay here, grab a coffee and
            keep refreshing the page!
          </p>
          <div className="flex justify-center">
            <Link to="/" class="link link-neutral">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoFound;
