import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app/app';
import { PersonList } from '@parvan/shared/person-list';
import { PersonForm } from '@parvan/shared/person-form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'person-list',
        element: <PersonList />,
      },
      {
        path: 'person-form',
        element: <PersonForm />,
      },
      {
        path: 'person-form/:id',
        element: <PersonForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
