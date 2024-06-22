import React from 'react';

const IconButton = ({ icon: Icon, text, onClick, className = ''}) => (
  <button
    onClick={onClick}
    className={`group flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200 ${className}`}
  >
    <Icon size={25} className="group-hover:text-purple-600 transition-colors duration-200" />
    <span className="ml-3 absolute left-full whitespace-nowrap hidden group-hover:block transition-all duration-200">
      {text}
    </span>
  </button>
);

export default IconButton;