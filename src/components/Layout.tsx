import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => (
  <>
    <Header />
    <main>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
