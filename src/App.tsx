import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { Link } from 'react-router-dom';

function App() {
    const telegram = useTelegram();

    return (
        <div className='flex flex-col gap-y-4'>
            {JSON.stringify(telegram)}
            <Link to='/course/1'>Страница курса</Link>
        </div>
    );
}

export default App;
