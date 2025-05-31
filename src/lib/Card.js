import React from 'react';

const Card = ({ title, children }) => {
      return (
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
                      <div>{children}</div>
                          </div>
                            );
                            };

                            export default Card;
