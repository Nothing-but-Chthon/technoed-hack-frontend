import { useTelegram } from '@/utils/contexts/telegram.tsx';

function App() {
    const telegram = useTelegram();

    return <div>{JSON.stringify(telegram)}</div>;
}

export default App;
