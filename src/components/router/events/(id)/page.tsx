import { Separator } from '@/components/ui/separator.tsx';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card.tsx';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import Description from '@/components/router/courses/(id)/description.tsx';
import Teachers from '@/components/router/courses/(id)/teachers.tsx';
import FAQ from '@/components/router/courses/(id)/faq.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '@/lib/utils.ts';
import { AxiosResponse } from 'axios';
import { CourseType } from '@/utils/types/api.ts';

export default function Event() {
    const { course_id } = useParams();
    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'Я приду' });
        telegram.webApp?.MainButton.show();

        telegram.webApp?.BackButton.onClick(() => navigate('/'));
        telegram.webApp?.BackButton.show();
    }, [telegram]);

    const [course, setCourse] = useState<CourseType | null>(null);

    useEffect(() => {
        axiosInstance
            .get(`/course/${course_id}`)
            .then((value: AxiosResponse<CourseType>) => setCourse(value.data));
    }, []);

    return (
        <div className='flex flex-col gap-y-4'>
            <h1 className='font-medium text-2xl'>{course?.name}</h1>
            <Separator className='bg-accentText h-3' />

            <Card>
                <CardHeader>
                    <CardDescription className='flex justify-between'>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaCalendarAlt className='text-accentText' />
                            {course?.start_date}
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaRegClock className='text-accentText' />
                            {course?.duration}
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaLocationDot className='text-accentText' />
                            {course?.location}
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-4'>
                    <Description description={course?.description as string} />

                    <Teachers teachers={course?.teachers ? course.teachers : []} />

                    <FAQ />
                </CardContent>
            </Card>
        </div>
    );
}
