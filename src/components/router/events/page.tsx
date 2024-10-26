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

export default function Events() {
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

            <Course />
            <Course />
            <Course />
        </div>
    );
}
