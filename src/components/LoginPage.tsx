import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  }

  return (
    <div className="login-container">
      <h2>Login for cats lover</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
