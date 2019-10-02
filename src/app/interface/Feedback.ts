import {Comment} from '../enum/Comment';

export interface Feedback {
  id?: number;
  comment: Comment;
  feedbackText: string;
}
