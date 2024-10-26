import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';

export default function Teachers() {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl font-semibold'>Преподаватели</h2>
            <div className='w-full flex flex-col items-center gap-y-2'>
                <Avatar className='w-1/3 h-1/3'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className='text-lg'>Морти Риков</span>
                <span>
                    Лидер компетенции JS, руководитель технологического Хаба Сбера в Казани с опытом
                    в разработке 16 лет, преподаватель курса «Cross-platform developer on
                    JavaScript» и опциональных модулей &#34;Electron&#34; и &#34;React-native&#34;
                </span>
            </div>
        </div>
    );
}
