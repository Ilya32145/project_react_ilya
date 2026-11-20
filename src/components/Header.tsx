import { NavLink } from 'react-router-dom';
import type { User } from './SignUpMenu';
import Input from './Input';
import Icon from './Icon';
import {
  AppstoreOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { SideMenu, type SideMenuItem } from './SideMenu';
import { useState } from 'react';

const items: SideMenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Почта',
    children: [
      { key: '1', label: 'Письма от друзей' },
      { key: '2', label: 'Письма по работе' },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Тема',
    children: [
      { key: '3', label: 'Тёмная' },
      { key: '4', label: 'Светлая' },
    ],
  },
  { type: 'divider' },
  { key: 'logout', icon: <LogoutOutlined />, label: 'Выйти', danger: true },
];

type HeaderProps = {
  user?: User | null;
  setUser?: (user: User | null) => void;
};

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? 'green' : 'blue',
  borderRadius: '15px',
  padding: '10px',
  color: 'white',
  textDecoration: 'none',
});

export function Header(props: HeaderProps) {
  const [key, setKey] = useState('1');

  const handleSelect = (selected: string) => {
    if (selected === 'logout') {
      props.setUser?.(null);
      localStorage.removeItem('user');
      return;
    }
    setKey(selected);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '8px 16px',
      }}
    >
      <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
        <NavLink to="/" style={linkStyle}>
          Главная
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          О нас
        </NavLink>
      </nav>
      <Input title="Input search message" textButton="Найти" />
      <div className="user-info">
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <SideMenu
            items={items}
            selectedKey={key}
            onSelect={handleSelect}
            defaultOpenKeys={['sub1']}
          />
          <h4>Вы на аккаунте: {props?.user?.username}</h4>
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            size={50}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}
