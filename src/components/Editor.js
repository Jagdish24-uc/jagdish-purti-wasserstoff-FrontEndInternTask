import React, { useState, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const Editor = ({ user, onContentChange, content }) => {
      const [quill, setQuill] = useState(null);

        useEffect(() => {
            const editor = new Quill('#editor', {
                  theme: 'snow',
                        modules: { toolbar: [['bold', 'italic', 'underline']] }
                            });
                                setQuill(editor);

                                    // Load initial content
                                        editor.setContents(content || '');

                                            // Listen for text changes
                                                editor.on('text-change', (delta, oldDelta, source) => {
                                                      if (source === 'user') {
                                                              onContentChange(editor.getContents(), user);
                                                                    }
                                                                        });

                                                                            // Sync content from other tabs
                                                                                const handleStorage = (e) => {
                                                                                      if (e.key === 'editorContent' && e.newValue) {
                                                                                              const data = JSON.parse(e.newValue);
                                                                                                      if (data.user !== user.id) {
                                                                                                                editor.setContents(data.content);
                                                                                                                        }
                                                                                                                              }
                                                                                                                                  };
                                                                                                                                      window.addEventListener('storage', handleStorage);
                                                                                                                                          return () => window.removeEventListener('storage', handleStorage);
                                                                                                                                            }, [user, onContentChange]);

                                                                                                                                              useEffect(() => {
                                                                                                                                                  if (quill && content && content.user !== user.id) {
                                                                                                                                                        quill.setContents(content.content);
                                                                                                                                                            }
                                                                                                                                                              }, [content, quill, user]);

                                                                                                                                                                return (
                                                                                                                                                                    <div className="w-full max-w-2xl mx-auto p-4">
                                                                                                                                                                          <div id="editor" className="h-64 border border-gray-300" />
                                                                                                                                                                                <p className="text-sm text-gray-500 mt-2">
                                                                                                                                                                                        Editing as: <span className="font-bold" style={{ color: user.color }}>{user.name}</span>
                                                                                                                                                                                              </p>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    };

                                                                                                                                                                                                    export default Editor;
