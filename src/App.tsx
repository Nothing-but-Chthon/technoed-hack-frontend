import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { useEffect } from 'react';

function App() {
    const telegram = useTelegram();
    console.log(telegram);

    useEffect(() => {
        telegram.webApp?.BackButton.hide();
        telegram.webApp?.MainButton.hide();
    }, [telegram]);

    return (
        <div className='flex flex-col gap-y-4'>
            {JSON.stringify(telegram)}

            <Button asChild className='bg-buttonColor text-buttonTextColor rounded'>
                <Link to='/courses'>Все курсы</Link>
            </Button>

            <Button asChild className='bg-buttonColor text-buttonTextColor rounded'>
                <Link to='/courses/1'>Страница курса</Link>
            </Button>

            <Button asChild className='bg-buttonColor text-buttonTextColor rounded'>
                <Link to='/events'>Все мероприятия</Link>
            </Button>

            <Button asChild className='bg-buttonColor text-buttonTextColor rounded'>
                <Link to='/events/1'>Страница мероприятия</Link>
            </Button>

            <Button asChild className='bg-buttonColor text-buttonTextColor rounded'>
                <Link to='/teachers'>Все преподаватели</Link>
            </Button>
        </div>
    );
}

export default App;
