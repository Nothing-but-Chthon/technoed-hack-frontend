import { Input } from '@/components/ui/input.tsx';
import { IoSearchSharp } from 'react-icons/io5';

import Teacher from '@/components/router/teachers/teacher.tsx';
import { useEffect, useState } from 'react';
import { TeacherType } from '@/utils/types/api.ts';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/lib/utils.ts';

export default function Teachers() {
    const [teachers, setTeachers] = useState<TeacherType[]>([]);

    useEffect(() => {
        axiosInstance
            .get('/teachers')
            .then((value: AxiosResponse<TeacherType[]>) => setTeachers(value.data));
    }, []);

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input className='bg-bgColor border-none' />
                <div className='h-10 w-10 bg-buttonColor flex justify-center items-center'>
                    <IoSearchSharp className='text-buttonTextColor w-7 h-7' />
                </div>
            </div>

            {teachers.map((teacher, idx) => (
                <Teacher key={idx} teacher={teacher} />
            ))}
        </div>
    );
}
