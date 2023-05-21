import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Favorites from './pages/Favorites/Favorites';
import Layout from './pages/Layout/Layout';
import Vacancy from './pages/Vacancy/Vacancy';
import { MantineProvider } from '@mantine/core';
import { theme } from './styles/theme';
import NotFound from './pages/NotFound/NotFound';
import { StrictMode } from 'react';
import DrawerProvider from './providers/Drawer/DrawerProvider';
import ParamsProvider from './providers/Params/ParamsProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnmount: false,
      // refetchOnReconnect: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/vacancy/:id',
        element: <Vacancy />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DrawerProvider>
          <ParamsProvider>
            <RouterProvider router={router} />
          </ParamsProvider>
        </DrawerProvider>
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
