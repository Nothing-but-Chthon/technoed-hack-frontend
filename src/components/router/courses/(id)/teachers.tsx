import { TeacherType } from '@/utils/types/api.ts';
import Teacher from '@/components/router/teachers/teacher.tsx';

interface TeachersProps {
    teachers: TeacherType[];
}

export default function Teachers({ teachers }: TeachersProps) {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Преподаватели</h2>
            {teachers.slice(5).map((teacher, idx) => (
                <Teacher teacher={teacher} key={idx} />
            ))}
        </div>
    );
}
