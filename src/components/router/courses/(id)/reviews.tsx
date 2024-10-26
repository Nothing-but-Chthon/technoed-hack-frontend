import Review from '@/components/router/courses/(id)/review.tsx';

export default function Reviews() {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Отзывы</h2>

            <Review />
            <Review />
            <Review />
        </div>
    );
}
