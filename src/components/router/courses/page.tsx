import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Button } from '@/components/ui/button.tsx';

export default function Courses() {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='w-full bg-bgColor rounded flex flex-col gap-y-4 px-4 py-4'>
                <h3 className='text-xl font-semibold'>Выжимка Ответов</h3>
                <div className='flex justify-between items-center'>
                    <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                        <FaCalendarAlt className='text-accentText' /> 30 Ноября
                    </span>
                    <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                        <FaRegClock className='text-accentText' />1 Месяц
                    </span>
                    <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                        <FaLocationDot className='text-accentText' /> Казань
                    </span>
                </div>
                <p>кринж кринж кринж кринж кринж кринж кринж кринж кринж кринж </p>

                <div className='w-full flex justify-end'>
                    <Button className='bg-buttonColor rounded'>Подробнее</Button>
                </div>
            </div>
        </div>
    );
}
