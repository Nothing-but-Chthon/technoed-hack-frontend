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
import { CourseType } from '@/utils/types/api.ts';
import { axiosInstance } from '@/lib/utils.ts';
import { AxiosResponse } from 'axios';

export default function Course() {
    const { course_id } = useParams();
    const navigate = useNavigate();
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'Записаться' });
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
            <h1 className='font-medium text-2xl'>Введение в цифровое проектирование одежды</h1>
            <Separator className='bg-accentText h-3' />

            <Card>
                <CardHeader>
                    <CardDescription className='flex justify-between'>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaCalendarAlt className='text-accentText' /> 30 Ноября
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaRegClock className='text-accentText' />1 Месяц
                        </span>
                        <span className='font-semibold text-lg inline-flex items-center gap-x-1'>
                            <FaLocationDot className='text-accentText' /> Казань
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-4'>
                    <Description description={course?.description as string} />

                    <Teachers teachers={course?.teachers ? course.teachers : []} />

                    <Reviews />

                    <FAQ />
                </CardContent>
                <CardFooter>
                    <Button className='block bg-buttonColor text-buttonTextColor rounded text-md'>
                        Записаться на демо урок
                    </Button>
                </CardFooter>
            </Card>

            <Organization />
        </div>
    );
}
