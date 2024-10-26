import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion.tsx';

export default function FAQ() {
    return (
        <div>
            <h2 className='text-xl font-semibold'>ЧАВО???</h2>
            <Accordion type='single' collapsible className='block'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='text-left'>Это хорошо?</AccordionTrigger>
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
                    <AccordionContent className='text-left'>Нам жаль это слышать.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
