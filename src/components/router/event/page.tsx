import { Separator } from '@/components/ui/separator.tsx';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import Description from '@/components/router/course/description.tsx';
import Teachers from '@/components/router/course/teachers.tsx';
import FAQ from '@/components/router/course/faq.tsx';
import { useNavigate } from 'react-router-dom';

export default function Event() {
    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'Я приду' });
        telegram.webApp?.MainButton.show();

        telegram.webApp?.BackButton.onClick(() => navigate('/'));
        telegram.webApp?.BackButton.show();
    }, [telegram]);

    return (
        <div className='flex flex-col gap-y-4'>
            <h1 className='font-medium text-2xl'>Случайное мероприятие</h1>
            <Separator className='bg-accentText h-3' />

            <Card>
                <CardHeader>
                    <CardDescription className='flex justify-between'>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaCalendarAlt className='text-accentText' /> 30 Ноября
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaRegClock className='text-accentText' />
                            16:00
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaLocationDot className='text-accentText' /> Казань
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-4'>
                    <Description />

                    <Teachers />

                    <FAQ />
                </CardContent>
            </Card>
        </div>
    );
}
