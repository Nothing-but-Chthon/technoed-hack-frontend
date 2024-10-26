import { Separator } from '@/components/ui/separator.tsx';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';

export default function Course() {
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'AAAAAA' });
        telegram.webApp?.MainButton.show();
    }, [telegram]);

    return (
        <div className='flex flex-col gap-y-4'>
            <h1 className='font-medium text-2xl'>Введение в цифровое проектирование одежды</h1>
            <Separator className='bg-primary h-3' />

            <Card>
                <CardHeader>
                    <CardDescription className='flex justify-between'>
                        <span className='font-semibold text-xl inline-flex items-center gap-x-1'>
                            <FaCalendarAlt className='text-primary' /> 30 Ноября
                        </span>
                        <span className='font-semibold text-xl inline-flex items-center gap-x-1'>
                            <FaRegClock className='text-primary' />1 Месяц
                        </span>
                        <span className='font-semibold text-xl inline-flex items-center gap-x-1'>
                            <FaLocationDot className='text-primary' /> Казань
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
            </Card>
        </div>
    );
}
