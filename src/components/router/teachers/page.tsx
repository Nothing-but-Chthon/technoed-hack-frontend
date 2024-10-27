import { Input } from '@/components/ui/input.tsx';
import { IoSearchSharp } from 'react-icons/io5';

import Teacher from '@/components/router/teachers/teacher.tsx';
import { useEffect, useState } from 'react';
import { TeacherType } from '@/utils/types/api.ts';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/lib/utils.ts';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '@/utils/contexts/telegram.tsx';

export default function Teachers() {
    const [teachers, setTeachers] = useState<TeacherType[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.BackButton.onClick(() => navigate('/'));
        telegram.webApp?.BackButton.show();
    }, [telegram]);

    useEffect(() => {
        axiosInstance
            .get('/teachers')
            .then((value: AxiosResponse<string>) => setTeachers(JSON.parse(value.data)));
    }, []);

    if (!teachers) {
        return <div>Loading</div>;
    }

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input
                    className='bg-bgColor border-none'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className='h-10 w-10 bg-buttonColor flex justify-center items-center'>
                    <IoSearchSharp className='text-buttonTextColor w-7 h-7' />
                </div>
            </div>

            {teachers
                .filter((teacher) => teacher.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((teacher, idx) => (
                    <Teacher key={idx} teacher={teacher} />
                ))}
        </div>
    );
}
