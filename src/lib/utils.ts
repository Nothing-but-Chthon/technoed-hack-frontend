import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios from 'axios';
import { VITE_BACKEND_URL } from '@/utils/config.ts';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
    baseURL: `${VITE_BACKEND_URL}`
});
