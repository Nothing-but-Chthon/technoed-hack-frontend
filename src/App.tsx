import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { useEffect } from 'react';

function App() {
    const telegram = useTelegram();
    console.log(telegram);

    useEffect(() => {
        telegram.webApp?.BackButton.hide();
    }, [telegram]);

    return (
        <div className='flex flex-col gap-y-4'>
            {JSON.stringify(telegram)}

            <Button asChild className='bg-buttonColor rounded'>
                <Link to='/course/1'>Страница курса</Link>
            </Button>
        </div>
    );
}

export default App;
