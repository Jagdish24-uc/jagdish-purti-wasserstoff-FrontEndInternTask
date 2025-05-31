import React from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';

const DemoPage2 = () => {
  return (
      <div className="min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold mb-4">Demo Page 2</h1>
                  <Card title="Settings">
                          <p className="text-gray-700">Another example of reusability.</p>
                                  <Button
                                            label="Save"
                                                      onClick={() => alert('Saved!')}
                                                                variant="secondary"
                                                                        />
                                                                                <Button
                                                                                          label="Cancel"
                                                                                                    onClick={() => alert('Cancelled!')}
                                                                                                              variant="secondary"
                                                                                                                      />
                                                                                                                            </Card>
                                                                                                                                </div>
                                                                                                                                  );
                                                                                                                                  };

                                                                                                                                  export default DemoPage2;