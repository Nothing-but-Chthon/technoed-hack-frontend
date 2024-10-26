/** @type {import("tailwindcss").Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                accentText: 'var(--accent_text_color)',
                bgColor: 'var(--bg_color)',
                buttonColor: 'var(--button_color)',
                buttonTextColor: 'var(--button_text_color)',
                destructiveTextColor: 'var(--destructive_text_color)',
                headerBgColor: 'var(--header_bg_color)',
                hintColor: 'var(--hint_color)',
                linkColor: 'var(--link_color)',
                secondaryBgColor: 'var(--secondary_bg_color)',
                sectionBgColor: 'var(--section_bg_color)',
                sectionHeaderTextColor: 'var(--section_header_text_color)',
                subtitleTextColor: 'var(--subtitle_text_color)',
                textColor: 'var(--text_color)'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};
