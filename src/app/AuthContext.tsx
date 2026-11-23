/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../shared/types/User';

const localUser = { username: '1', password: '1' };

const isValid = (u: User | null) =>
  u?.username === localUser.username && u?.password === localUser.password;

type AuthContextType = {
  user: User | null;
  login: (user: User, remember: boolean) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('user') || 'null');
      return isValid(saved) ? saved : null;
    } catch {
      return null;
    }
  });

  const login = (u: User, remember: boolean) => {
    if (!isValid(u)) return false;
    setUser(u);
    if (remember) localStorage.setItem('user', JSON.stringify(u));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
