import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
  Apply,
  Create,
  Explore,
  Home,
  Responses,
  Signin,
  Signup,
} from '../../pages';
import Auth from '../../pages/Auth';

export const AppLayout = () => {
  return (
    <div className="w-screen">
      <Outlet />
    </div>
  );
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/auth',
        element: <Auth />,
        children: [
          {
            path: '/auth/login',
            element: <Signin />,
          },
          {
            path: '/auth/register',
            element: <Signup />,
          },
        ],
      },
      {
        path: '/apply/:jobid',
        element: <Apply />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/jobs',
        element: <Explore />,
      },
      {
        path: '/responses/:jobid',
        element: <Responses />,
      },
    ],
  },
]);
