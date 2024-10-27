import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { TeacherType } from '@/utils/types/api.ts';

interface TeacherProps {
    teacher: TeacherType;
}

export default function Teacher({ teacher }: TeacherProps) {
    console.log(JSON.stringify(teacher));
    return (
        <div className='w-full flex flex-col items-center gap-y-2 bg-bgColor p-4 rounded'>
            <Avatar className='w-1/3 h-1/3'>
                <AvatarImage src={teacher.image_url} />
                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className='text-lg'>{teacher.name}</span>
            <span>{teacher.achievement}</span>
        </div>
    );
}
