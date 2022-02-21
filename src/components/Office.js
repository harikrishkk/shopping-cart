import React from 'react';
import useToggle from '@hooks/use-toggle';

const Office = () => {
  const { isOpen, toggle } = useToggle(true);

  return (
    <div className="w-full md:w-2/3 collapse border border-base-300 bg-base-100 collapse-arrow mb-4">
      <div onClick={toggle} className="collapse-title text-xl font-medium">
        What is your head office located?
      </div>
      {isOpen && (
        <div className="p-4">
          <p>
            We have multiple offices throughout Toronto. The main one is near
            Downtown , Toronto, neat Union Station.
          </p>
        </div>
      )}
    </div>
  );
};

export default Office;
