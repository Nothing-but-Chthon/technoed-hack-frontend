import { Badge } from '@/components/ui/badge.tsx';

export default function Review() {
    return (
        <div className='w-full border-b border-hintColor rounded flex flex-col gap-y-4 px-4 pb-4'>
            <div className='flex gap-x-2 items-center'>
                <h3 className='text-lg font-semibold'>Выжимка Ответов</h3>
                <Badge>Пройдено 10%</Badge>
            </div>
            <p>кринж кринж кринж кринж кринж кринж кринж кринж кринж кринж </p>
        </div>
    );
}
