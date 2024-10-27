import Review from '@/components/router/courses/(id)/review.tsx';
import { ReviewType } from '@/utils/types/api.ts';

interface ReviewsProps {
    reviews: ReviewType[];
}

export default function Reviews({ reviews }: ReviewsProps) {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Отзывы</h2>

            {reviews.map((review, idx) => (
                <Review key={idx} review={review} />
            ))}
        </div>
    );
}
