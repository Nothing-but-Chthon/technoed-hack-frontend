import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { CourseType } from '@/utils/types/api.ts';

interface CourseProps {
    course: CourseType;
}

export default function Course({ course }: CourseProps) {
    return (
        <div className='w-full bg-bgColor rounded flex flex-col gap-y-4 px-4 py-4'>
            <h3 className='text-xl font-semibold'>{course.name}</h3>
            <div className='flex justify-between items-center'>
                <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                    <FaCalendarAlt className='text-accentText' /> {course.start_date}
                </span>
                <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                    <FaRegClock className='text-accentText' />
                    {course.duration}
                </span>
                <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                    <FaLocationDot className='text-accentText' /> {course.location}
                </span>
            </div>
            <p>{course.description}</p>

            <div className='w-full flex justify-end'>
                <Button asChild className='bg-buttonColor rounded'>
                    <Link to={`/courses/${course.id}`}>Подробнее</Link>
                </Button>
            </div>
        </div>
    );
}
