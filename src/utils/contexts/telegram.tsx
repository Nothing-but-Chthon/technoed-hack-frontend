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
        if (app && app.initData) {
            app.ready();
            setWebApp(app);
        } else {
            const lp = {
                themeParams: {
                    bg_color: '#212121',
                    text_color: '#ffffff',
                    hint_color: '#aaaaaa',
                    link_color: '#8774e1',
                    button_color: '#8774e1',
                    button_text_color: '#ffffff',
                    secondary_bg_color: '#0f0f0f',
                    header_bg_color: '#212121',
                    accent_text_color: '#8774e1',
                    section_bg_color: '#212121',
                    section_header_text_color: '#aaaaaa',
                    subtitle_text_color: '#aaaaaa',
                    destructive_text_color: '#e53935'
                },
                initDataUnsafe: {
                    user: {
                        id: 99281932,
                        first_name: 'Andrew',
                        last_name: 'Rogue',
                        username: 'rogue',
                        language_code: 'en',
                        is_premium: true,
                        allows_write_to_pm: true
                    }
                },
                initData: JSON.stringify({
                    user: {
                        id: 99281932,
                        first_name: 'Andrew',
                        last_name: 'Rogue',
                        username: 'rogue',
                        language_code: 'en',
                        is_premium: true,
                        allows_write_to_pm: true
                    }
                }),
                version: '8',
                platform: 'tdesktop',
                MainButton: {
                    text: 'MainBtn',
                    color: 'BLACK',
                    textColor: 'WHITE',
                    isVisible: false,
                    isProgressVisible: false,
                    isActive: false,
                    show: () => {},
                    hide: () => {},
                    enable: () => {},
                    disable: () => {},
                    setParams: () => {}
                },
                BackButton: {
                    show: () => {},
                    hide: () => {},
                    onClick: () => {}
                },
                disableVerticalSwipes: () => {},
                openTelegramLink: (link: string) => {
                    console.log(`Opened link : ${link}`);
                }
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
