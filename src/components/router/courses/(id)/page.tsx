import { Separator } from '@/components/ui/separator.tsx';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from '@/components/ui/card.tsx';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { Button } from '@/components/ui/button.tsx';
import Description from '@/components/router/courses/(id)/description.tsx';
import Teachers from '@/components/router/courses/(id)/teachers.tsx';
import FAQ from '@/components/router/courses/(id)/faq.tsx';
import Reviews from '@/components/router/courses/(id)/reviews.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import Organization from '@/components/router/courses/(id)/organization.tsx';
import { CourseType, TeacherType } from '@/utils/types/api.ts';
import { axiosInstance } from '@/lib/utils.ts';
import { AxiosResponse } from 'axios';

export default function Course() {
    const { course_id } = useParams();
    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.BackButton.onClick(() => navigate('/'));
        telegram.webApp?.BackButton.show();
    }, [telegram]);

    const [course, setCourse] = useState<CourseType | null>(null);

    useEffect(() => {
        axiosInstance.get(`/courses/${course_id}`).then((value: AxiosResponse<string>) => {
            setCourse(JSON.parse(value.data));
        });
    }, []);

    useEffect(() => {
        if (course) {
            const text =
                course.completed > 0
                    ? 'Оставить отзыв'
                    : course.closed
                      ? 'Записаться на тестирование'
                      : 'Записаться на курс';
            telegram.webApp?.MainButton.setParams({ text: text });
            telegram.webApp?.MainButton.show();
        }
    }, [course]);

    console.log(course);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col gap-y-4'>
            <h1 className='font-medium text-2xl'>{course.name}</h1>
            <Separator className='bg-accentText h-3' />

            <Card>
                <CardHeader>
                    <CardDescription className='flex justify-between'>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaCalendarAlt className='text-accentText' />
                            {course.start_date}
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaRegClock className='text-accentText' />
                            {course.duration}
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaLocationDot className='text-accentText' /> {course.location}
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-4'>
                    <Description description={course.description} />

                    <Teachers teachers={JSON.parse(course.teacher_info) as TeacherType[]} />

                    <Reviews reviews={course.reviews} />

                    <FAQ />
                </CardContent>
                <CardFooter>
                    <Button
                        className='block bg-buttonColor text-buttonTextColor rounded text-md'
                        disabled={course.completed > 0}
                    >
                        Записаться на демо урок
                    </Button>
                </CardFooter>
            </Card>

            <Organization />
        </div>
    );
}
