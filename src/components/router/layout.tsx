import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='px-2 pb-4'>
            <Outlet />
        </div>
    );
}
