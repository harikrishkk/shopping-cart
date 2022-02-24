import React, { useState } from 'react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStatus = () => {
    setIsOpen((flag) => !flag);
  };

  return (
    <div className="w-full md:w-2/3 collapse border border-base-300 bg-base-100 collapse-arrow mb-4">
      <div
        onClick={toggleStatus}
        className="collapse-title text-xl font-medium"
      >
        Do you have a ticket cancellation policy?
      </div>
      {isOpen && (
        <div className="p-4">
          <p>
            Yes we do!. You can get a full refund if you cancel 24 hrs before
            the show.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
