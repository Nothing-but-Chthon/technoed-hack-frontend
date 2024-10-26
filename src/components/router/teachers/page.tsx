import { Input } from '@/components/ui/input.tsx';
import { IoSearchSharp } from 'react-icons/io5';

import Teacher from '@/components/router/teachers/teacher.tsx';

export default function Teachers() {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input className='bg-bgColor border-none' />
                <div className='h-10 w-10 bg-buttonColor flex justify-center items-center'>
                    <IoSearchSharp className='text-buttonTextColor w-7 h-7' />
                </div>
            </div>

            <Teacher />
            <Teacher />
        </div>
    );
}
