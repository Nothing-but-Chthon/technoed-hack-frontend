# Frontend for TechnoEd Hackathon from Sber

## Team "Хтонь да и только"

### Run instructions

To run this application locally:

1. Make sure you have [`node.js`](https://nodejs.org/en) installed and you have
   your [backend](https://github.com/Nothing-but-Chthon/technoed-hack-backend/tree/main) running

2. Install dependencies

```shell
npm install
```

3. Change [`/src/utils/config.ts`](/src/utils/config.ts) if needed

```
export const VITE_BACKEND_URL = 'https://chthon.servebeer.com/api';
export const VITE_TG_BOT = 'https://t.me/chton_test_bot';
```

4. Run in development mode

```shell
npm run dev
```