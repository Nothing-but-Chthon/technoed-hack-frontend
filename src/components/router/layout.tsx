import { Outlet } from 'react-router-dom';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { useEffect } from 'react';

export default function Layout() {
    const telegram = useTelegram();
    useEffect(() => {
        const color = telegram.webApp?.headerColor;
        const background = telegram.webApp?.backgroundColor;

        if (color) {
            document.documentElement.style.setProperty('--primary', color);
        }
        if (background) {
            document.documentElement.style.setProperty('--background', background);
        }
    }, [telegram]);

    return (
        <div className='px-2 pb-4'>
            <Outlet />
        </div>
    );
}
