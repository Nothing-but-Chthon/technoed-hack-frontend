import { Separator } from '@/components/ui/separator.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion.tsx';

export default function Course() {
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'Записаться' });
        telegram.webApp?.MainButton.show();
    }, [telegram]);

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
                    <h2 className='text-xl font-semibold'>Описание</h2>
                    <p>
                        Для кого курс: · для лиц, имеющих базовое представление о принципах
                        построения конструкций швейных изделий без использования средств
                        автоматизации; · курс может быть полезен как профессионалам, так и
                        любителям, занимающимся проектированием одежды. Основная цель курса:
                        получить знания и навыки, позволяющие уверенно использовать цифровые
                        инструменты проектирования одежды. В завершении курса вы ознакомитесь с
                        современными инструментами, применяемыми в проектировании (дизайне) одежды,
                        позволяющих за более короткие сроки создавать более качественные и более
                        сложные с точки зрения креатива конструкции. На занятиях вы узнаете, как
                        создать любой дизайн одежды, применив искусственный интеллект. Формат
                        выпускной работы: защита проекта по построению и визуализации базовой
                        конструкции прямой юбки. По итогу курса слушатели получат удостоверение о
                        повышении квалификации. На протяжении всего курса вас будут поддерживать: ·
                        куратор, который поможет решить вопросы, связанные с обучением; ·
                        преподаватель, который ответит на все вопросы о содержании уроков и заданий.
                        Старт: октябрь Объем курса: 16 акад./ч (продолжительность 1 месяц)
                        Стоимость: 15 000руб. (возможна рассрочка) Формат: офлайн (занятия 1 раз в
                        неделю)
                    </p>

                    <div className='flex flex-col gap-y-4'>
                        <h2 className='text-xl font-semibold'>Преподаватели</h2>
                        <div className='w-full flex flex-col items-center gap-y-2'>
                            <Avatar className='w-1/3 h-1/3'>
                                <AvatarImage src='https://github.com/shadcn.png' />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className='text-lg'>Морти Риков</span>
                            <span>
                                Лидер компетенции JS, руководитель технологического Хаба Сбера в
                                Казани с опытом в разработке 16 лет, преподаватель курса
                                «Cross-platform developer on JavaScript» и опциональных модулей
                                &#34;Electron&#34; и &#34;React-native&#34;
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold'>ЧАВО???</h2>
                        <Accordion type='single' collapsible className='block'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='text-left'>
                                    Это хорошо?
                                </AccordionTrigger>
                                <AccordionContent className='text-left'>Да.</AccordionContent>
                            </AccordionItem>

                            <AccordionItem value='item-2'>
                                <AccordionTrigger className='text-left'>
                                    Если мне не понравится, мне вернут деньги?
                                </AccordionTrigger>
                                <AccordionContent className='text-left'>Да.</AccordionContent>
                            </AccordionItem>

                            <AccordionItem value='item-3'>
                                <AccordionTrigger className='text-left'>
                                    Что делать, если я не нашел ответ на свой вопрос?
                                </AccordionTrigger>
                                <AccordionContent className='text-left'>
                                    Нам жаль это слышать.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='block bg-buttonColor text-buttonTextColor rounded text-md'>
                        Записаться на демо урок
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
