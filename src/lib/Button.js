import React from 'react';

const Button = ({ label, onClick, variant = 'primary' }) => {
  const base = 'px-4 py-2 rounded font-medium transition';
    const variants = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
            secondary: 'bg-gray-200 text-black hover:bg-gray-300'
              };
                return (
                    <button
                          className={`${base} ${variants[variant]}`}
                                onClick={onClick}
                                    >
                                          {label}
                                              </button>
                                                );
                                                };

                                                export default Button;