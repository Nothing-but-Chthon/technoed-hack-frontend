import { Outlet } from 'react-router-dom';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { useEffect } from 'react';

export default function Layout() {
    const telegram = useTelegram();
    useEffect(() => {
        const themeParams = telegram.webApp?.themeParams;
        if (!themeParams) {
            return;
        }

        for (const key of Object.keys(themeParams)) {
            document.documentElement.style.setProperty(
                `--${key}`,
                themeParams[key as keyof typeof themeParams]
            );
        }
    }, [telegram]);

    return (
        <div className='px-2 pb-4 bg-bgColor text-textColor'>
            <Outlet />
        </div>
    );
}
