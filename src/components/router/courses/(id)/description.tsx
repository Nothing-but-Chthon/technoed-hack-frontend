interface DescriptionProps {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Описание</h2>
            <p>{description}</p>
        </div>
    );
}
