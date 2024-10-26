import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TelegramProvider } from '@/utils/contexts/telegram.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from '@/components/router/course/page.tsx';
import Layout from '@/components/router/layout.tsx';
import Faq from '@/components/router/faq/page.tsx';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/course/:id',
                element: <Course />
            },
            {
                path: '/faq',
                element: <Faq />
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
