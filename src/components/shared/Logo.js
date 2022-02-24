import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.a
      className="mb-6 sm:mx-auto"
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
        <svg
          className="w-10 h-10 text-deep-purple-accent-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
    </motion.a>
  );
};

export default Logo;
