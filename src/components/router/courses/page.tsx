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
import { CourseType } from '@/utils/types/api.ts';
import { axiosInstance } from '@/lib/utils.ts';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '@/utils/contexts/telegram.tsx';

export default function Courses() {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>();

    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.BackButton.onClick(() => navigate('/'));
        telegram.webApp?.BackButton.show();
    }, [telegram]);

    useEffect(() => {
        axiosInstance
            .get('/courses')
            .then((value: AxiosResponse<string>) => setCourses(JSON.parse(value.data)));
    }, []);

    if (!courses) {
        return <div>Loading</div>;
    }

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input className='bg-bgColor border-none' />
                <div className='h-10 w-10 bg-buttonColor flex justify-center items-center'>
                    <IoSearchSharp className='text-buttonTextColor w-7 h-7' />
                </div>
            </div>
            <Select
                value={selectedCity}
                onValueChange={(v) => {
                    setSelectedCity(v);
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder='Все города' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='Казань'>Казань</SelectItem>
                    <SelectItem value='Набережные Челны'>Набережные Челны</SelectItem>
                </SelectContent>
            </Select>

            {courses
                .filter((c) => (selectedCity ? c.location === selectedCity : true))
                .map((e, idx) => (
                    <Course key={idx} course={e} />
                ))}
        </div>
    );
}
