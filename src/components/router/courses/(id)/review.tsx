import { Badge } from '@/components/ui/badge.tsx';
import { ReviewType } from '@/utils/types/api.ts';

interface ReviewProps {
    review: ReviewType;
}

export default function Review({ review }: ReviewProps) {
    return (
        <div className='w-full border-b border-hintColor rounded flex flex-col gap-y-4 px-4 pb-4'>
            <div className='flex gap-x-2 items-center'>
                <h3 className='text-lg font-semibold'>{review.author}</h3>
                {review.grade && <Badge>{review.grade}</Badge>}
            </div>
            <p>{review.text}</p>
        </div>
    );
}
