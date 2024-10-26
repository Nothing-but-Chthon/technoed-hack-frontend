import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TelegramProvider } from '@/utils/contexts/telegram.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TelegramProvider>
            <RouterProvider router={router} />
        </TelegramProvider>
    </StrictMode>
);
