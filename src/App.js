import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import UserIndicator from './components/UserIndicator';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState(null);

  // Simulate user login
  useEffect(() => {
    const id = Math.random().toString(36).substr(2, 9);
    const name = prompt('Enter your username:') || `User-${id.slice(0, 4)}`;
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    const newUser = { id, name, color };
    setUser(newUser);
    setUsers((prev) => [...prev, newUser]);

    // Simulate user list sync via localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Clean up on unmount
    return () => {
      const currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const filtered = currentUsers.filter((u) => u.id !== newUser.id);
      localStorage.setItem('users', JSON.stringify(filtered));
    };
  }, []);

  // Handle content changes
  const handleContentChange = (newContent, editingUser) => {
    const data = { content: newContent, user: editingUser.id };
    setContent(data);
    localStorage.setItem('editorContent', JSON.stringify(data));
  };

  // Sync users from localStorage
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'users') {
        setUsers(JSON.parse(e.newValue || '[]'));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Collaborative Editor</h1>
      <UserIndicator users={users} />
      <Editor user={user} onContentChange={handleContentChange} content={content} />
    </div>
  );
};

export default App;