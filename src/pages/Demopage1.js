import React from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';

const DemoPage1 = () => {
  return (
      <div className="min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold mb-4">Demo Page 1</h1>
                  <Card title="Welcome Card">
                          <p className="text-gray-700">This is a reusable card component.</p>
                                  <Button
                                            label="Click Me"
                                                      onClick={() => alert('Button clicked!')}
                                                                variant="primary"
                                                                        />
                                                                              </Card>
                                                                                  </div>
                                                                                    );
                                                                                    };

                                                                                    export default DemoPage1;