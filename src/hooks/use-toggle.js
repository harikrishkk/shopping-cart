import { useState } from 'react';

const useToggle = (open = false) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggle = () => {
    setIsOpen((v) => !v);
  };
  return {
    isOpen,
    toggle,
  };
};
export default useToggle;
