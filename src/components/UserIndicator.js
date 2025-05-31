import React from 'react';

const UserIndicator = ({ users }) => {
  return (
      <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded-lg">
            {users.map((u) => (
                    <div
                              key={u.id}
                                        className="flex items-center gap-1 px-2 py-1 bg-white rounded shadow"
                                                >
                                                          <div
                                                                      className="w-3 h-3 rounded-full"
                                                                                  style={{ backgroundColor: u.color }}
                                                                                            />
                                                                                                      <span className="text-sm">{u.name}</span>
                                                                                                              </div>
                                                                                                                    ))}
                                                                                                                        </div>
                                                                                                                          );
                                                                                                                          };

                                                                                                                          export default UserIndicator;