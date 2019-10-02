import {Comment} from '../enum/Comment';

export interface Performance {
    id?: number;
    grade: number;
    date: string;
    employeeName: string;
    comment: Comment;
}
