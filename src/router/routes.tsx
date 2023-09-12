import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [{ index: true, path: '/', element: <Home /> }],
  },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
