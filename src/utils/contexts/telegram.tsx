import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ITelegramUser, IWebApp } from '@/utils/types/telegram.ts';

export interface ITelegramContext {
    webApp?: IWebApp;
    user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
    const [webApp, setWebApp] = useState<IWebApp | null>(null);

    useEffect(() => {
        const app = (window as any).Telegram?.WebApp;
        if (app) {
            app.ready();
            setWebApp(app);
        } else {
            const lp = {
                themeParams: {
                    accentTextColor: '#6ab2f2',
                    bgColor: '#17212b',
                    buttonColor: '#5288c1',
                    buttonTextColor: '#ffffff',
                    destructiveTextColor: '#ec3942',
                    headerBgColor: '#17212b',
                    hintColor: '#708499',
                    linkColor: '#6ab3f3',
                    secondaryBgColor: '#232e3c',
                    sectionBgColor: '#17212b',
                    sectionHeaderTextColor: '#6ab3f3',
                    subtitleTextColor: '#708499',
                    textColor: '#f5f5f5'
                },
                initData: {
                    user: JSON.stringify({
                        id: 99281932,
                        first_name: 'Andrew',
                        last_name: 'Rogue',
                        username: 'rogue',
                        language_code: 'en',
                        is_premium: true,
                        allows_write_to_pm: true
                    })
                },
                version: '8',
                platform: 'tdesktop'
            };

            setWebApp(lp as unknown as IWebApp);
        }
    }, []);

    const value = useMemo(() => {
        return webApp
            ? {
                  webApp,
                  unsafeData: webApp.initDataUnsafe,
                  user: webApp.initDataUnsafe.user
              }
            : {};
    }, [webApp]);

    return <TelegramContext.Provider value={value}>{children}</TelegramContext.Provider>;
};

export const useTelegram = () => useContext(TelegramContext);
