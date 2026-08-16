/**
 * Course domain constants - public visibility statuses, pagination, default language.
 * Sirf PUBLISHED courses catalog me dikhe. Admin approve ke baad instructor publish karega.
 */
import { CourseStatus } from '../courses/enums/course.enums';

export const COURSE_MAX_PAGE_SIZE = 50;
export const COURSE_DEFAULT_LANGUAGE = 'English';
export const COURSE_PUBLIC_STATUSES = [CourseStatus.PUBLISHED] as const;
