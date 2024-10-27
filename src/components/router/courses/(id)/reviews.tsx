import Review from '@/components/router/courses/(id)/review.tsx';
import { ReviewType } from '@/utils/types/api.ts';

interface ReviewsProps {
    reviews: ReviewType[];
    summarized: string;
}

export default function Reviews({ reviews, summarized }: ReviewsProps) {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Отзывы</h2>

            <Review review={{ author: 'Выжимка', text: summarized }} />
            {reviews.slice(5).map((review, idx) => (
                <Review key={idx} review={review} />
            ))}
        </div>
    );
}
