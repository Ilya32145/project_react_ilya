import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
