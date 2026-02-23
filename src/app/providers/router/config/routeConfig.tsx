import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../../App';

const isProd = process.env.NODE_ENV === 'production';
export const router = createBrowserRouter(
  [
    {
      element: <App />,
      path: '/',
    },
  ],
  {
    basename: isProd ? '/CR/' : '/',
  },
);
