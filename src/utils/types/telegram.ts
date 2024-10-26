export interface ITelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
}

export interface IWebApp {
    disableVerticalSwipes: () => void;
    initData: string;
    initDataUnsafe: {
        query_id: string;
        user: ITelegramUser;
        auth_date: string;
        hash: string;
    };
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: {
        accent_text_color: string;
        bg_color: string;
        button_color: string;
        button_text_color: string;
        destructive_text_color: string;
        header_bg_color: string;
        hint_color: string;
        link_color: string;
        secondary_bg_color: string;
        section_bg_color: string;
        section_header_color: string;
        subtitle_text_color: string;
        text_color: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
        isVisible: boolean;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
    };
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isProgressVisible: boolean;
        isActive: boolean;
        show: () => void;
        hide: () => void;
        enable: () => void;
        disable: () => void;
        setParams: (params: { text?: string; has_shine_effect?: boolean }) => void;
    };
    HapticFeedback: any;
}
