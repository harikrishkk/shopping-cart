import React from 'react';
import useToggle from '@hooks/use-toggle';
import OfficeWrapper, {
  OfficeHeader,
  OfficeContent,
} from '@styled/OfficeWrapper';

const Office = () => {
  const { isOpen, toggle } = useToggle(false);

  return (
    <OfficeWrapper>
      <OfficeHeader onClick={toggle}>
        What is your head office located?
      </OfficeHeader>
      {isOpen && (
        <OfficeContent>
          <p>
            We have multiple offices throughout Toronto. The main one is near
            Downtown , Toronto, neat Union Station.
          </p>
        </OfficeContent>
      )}
    </OfficeWrapper>
  );
};

export default Office;
