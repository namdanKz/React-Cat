// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import Login from './components/LoginPage';
import CatPage from './components/ImagePage';

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === "cat" && password === "cat1234")
    {
      setLoggedIn(true);
    }
    else
    {
      alert("Invalid")
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? <CatPage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
