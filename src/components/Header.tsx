import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/about">О нас</NavLink>
    </nav>
  );
}
