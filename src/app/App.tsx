import { Header } from '../components/Header';
import AppRoutes from './AppRoutes';
import { useState } from 'react';
import { SignUpMenu, type User } from '../components/SignUpMenu';

const localUser = {
  username: '1',
  password: '1',
};

export default function App() {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  const onLogin = (userOfSignUpMenu: User, remember: boolean) => {
    setUser(userOfSignUpMenu);
    if (remember) localStorage.setItem('user', JSON.stringify(userOfSignUpMenu));
  };

  const isValid: boolean =
    user?.username === localUser.username && user?.password === localUser.password;

  if (isValid) {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <main>
          <AppRoutes />
        </main>
      </>
    );
  }

  return (
    <>
      {user && (
        <>
          <h1>Wrong password or username</h1>
          {localStorage.removeItem('user')}
        </>
      )}
      <SignUpMenu onLogin={onLogin} />
    </>
  );
}
