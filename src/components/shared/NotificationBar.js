import React from 'react';

const NotificationBar = ({ message, type, onClose }) => {
  let classes = 'alert shadow-lg mt-8';
  if (type === 'success') {
    classes += ' alert-success';
  }
  return (
    <div className={classes}>
      <div className="flex w-full justify-between">
        <span className="text-slate-900">{message}</span>
        <div onClick={onClose} className="cursor-pointer badge badge-lg">
          x
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
