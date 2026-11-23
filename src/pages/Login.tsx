import { useState } from 'react';
import { SignUpMenu } from '../components/SignUpMenu';
import { useAuth } from '../app/AuthContext';
import type { User } from '../shared/types/User';

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState(false);

  const onLogin = (u: User, remember: boolean) => {
    setError(!login(u, remember));
  };

  return (
    <>
      {error && <h1>Wrong password or username</h1>}
      <SignUpMenu onLogin={onLogin} />
    </>
  );
}
