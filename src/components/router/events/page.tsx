import Course from '@/components/router/courses/course.tsx';
import { Input } from '@/components/ui/input.tsx';
import { IoSearchSharp } from 'react-icons/io5';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/utils.ts';
import { AxiosResponse } from 'axios';
import { CourseType } from '@/utils/types/api.ts';

export default function Events() {
    const [events, setEvents] = useState<CourseType[]>([]);

    useEffect(() => {
        axiosInstance
            .get('/events')
            .then((value: AxiosResponse<CourseType[]>) => setEvents(value.data));
    }, []);

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input className='bg-bgColor border-none' />
                <div className='h-10 w-10 bg-buttonColor flex justify-center items-center'>
                    <IoSearchSharp className='text-buttonTextColor w-7 h-7' />
                </div>
            </div>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder='Все города' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='light'>Казань</SelectItem>
                    <SelectItem value='dark'>Набережные Челны</SelectItem>
                </SelectContent>
            </Select>

            {events.map((e, idx) => (
                <Course key={idx} course={e} />
            ))}
        </div>
    );
}
