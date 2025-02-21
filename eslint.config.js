import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { ignores: ['tailwind.config.js'] },

    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            prettier: pluginPrettier
        }
    },
    {
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            'react/prop-types': 'off',
            '@typescript-eslint/no-explicit-any': ['off'],
            'react/react-in-jsx-scope': 'off'
        }
    }
];
