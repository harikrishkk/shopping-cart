import React from 'react';
import FeedbackForm from '@components/FeedbackForm';
import FAQ from '@components/FAQ';
import Office from '@components/Office';
const About = () => {
  return (
    <div className="container px-5 py-12 mx-auto">
      <h2 className="text-2xl mb-6 font-bold"> About Us </h2>
      <div className="flex justify-center flex-col items-center">
        <FAQ />
        <Office />
      </div>

      <FeedbackForm />
    </div>
  );
};

export default About;
