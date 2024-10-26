import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TelegramProvider } from '@/utils/contexts/telegram.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from '@/components/router/courses/(id)/page.tsx';
import Layout from '@/components/router/layout.tsx';
import Courses from '@/components/router/courses/page.tsx';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/courses/:id',
                element: <Course />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TelegramProvider>
            <RouterProvider router={router} />
        </TelegramProvider>
    </StrictMode>
);
