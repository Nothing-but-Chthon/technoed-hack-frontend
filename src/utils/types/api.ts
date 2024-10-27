export interface TeacherType {
    id: number;
    name: string;
    position: string;
    achievement: string;
    image_url: string;
}

export interface UserType {
    id: number;
    name: string;
    tg_id: number;
    phone: string;
}

export interface ReviewType {
    author: string;
    text: string;
    grade?: number;
}

export interface CourseType {
    closed: boolean;
    completed: number;
    id: number;
    name: string;
    start_date: string;
    duration: string;
    location: string;
    description: string;
    short_description: string;
    type: string;
    link: string;
    summarized_reviews: string;
    teacher_info: string;
    reviews: ReviewType[];
}
