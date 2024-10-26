import { useEffect } from 'react';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

export default function Faq() {
    const telegram = useTelegram();

    useEffect(() => {
        telegram.webApp?.MainButton.setParams({ text: 'Задать вопрос' });
        telegram.webApp?.MainButton.show();
    }, [telegram]);

    return (
        <div className='h-full min-h-full flex flex-col'>
            <div className='flex-1' />

            <h1 className='text-2xl font-semibold'>ЧАВО</h1>

            <div>
                <Accordion type='single' collapsible className=''>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-2'>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-3'>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
