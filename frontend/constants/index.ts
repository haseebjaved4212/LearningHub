/**
 * Central constants folder - frontend ke saare static data yahan par hain.
 * Students ko pehle ye folder share karo taaki lecture padhne me asaani ho.
 */

export { GoogleLogoSvg } from './icons';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    DollarSign,
    Plus,
    Settings,
    Shield,
    BarChart3,
    Award,
    User,
    Globe,
    Camera,
    Music,
    Code,
    TrendingUp,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    CheckCircle,
    XCircle,
    Clock,
    UserX,
    CreditCard,
    Banknote,
    Briefcase,
    Smartphone,
    Database,
    Brain,
    Layout,
    Share2,
    Blocks,
    Cloud,
    Heart,
    Star,
} from 'lucide-react';
import {
    DashboardStatConfig,
    OnboardingBenefit,
    OnboardingStep,
    Testimonial,
} from '@/lib/types';

export const FOOTER_LINKS = {
    platform: [
        { name: 'About Us', href: '/about' },
        { name: 'How It Works', href: '/coming-soon/how-it-works' },
        { name: 'Careers', href: '/coming-soon/careers' },
    ],
    resources: [
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/coming-soon/blog' },
        { name: 'Support', href: '/support' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ],
};

export const SOCIAL_LINKS = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export const COURSE_CREATION_STEPS = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Pricing & Details' },
    { number: 3, title: 'Requirements & Outcomes' },
    { number: 4, title: 'Add Content' },
];

export const CHART_COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export const HERO_STATS = [
    { label: 'Active Students', value: '50K+', icon: Users },
    { label: 'Expert Instructors', value: '500+', icon: BookOpen },
    { label: 'Course Categories', value: '100+', icon: Award },
];

export const STUDENT_DASHBOARD_STATS_CONFIG: DashboardStatConfig[] = [
    { label: "Total Courses", key: "totalCourses", icon: BookOpen },
    { label: "Learning Hours", key: "totalHours", icon: Clock, suffix: "h" },
    { label: "Certificates", key: "certificates", icon: Award },
    { label: "Current Streak", key: "currentStreak", icon: TrendingUp, suffix: " days" },
];

export const STUDENT_PROFILE_STATS_CONFIG: DashboardStatConfig[] = [
    { label: "Total Courses", key: "totalCourses", icon: BookOpen },
    { label: "Completed", key: "completedCourses", icon: Award },
    { label: "Member Since", key: "memberSince", icon: Clock },
];

export const INSTRUCTOR_DASHBOARD_STATS_CONFIG: DashboardStatConfig[] = [
    { label: "Total Courses", key: "totalCourses", icon: BookOpen },
    { label: "Total Students", key: "totalStudents", icon: Users },
    { label: "Total Revenue", key: "totalRevenue", icon: DollarSign, prefix: "₹" },
    { label: "Certificates", key: "certificatesIssued", icon: Award },
];

export const ADMIN_DASHBOARD_STATS_CONFIG: DashboardStatConfig[] = [
    { label: "Total Users", key: "totalUsers", icon: Users, color: "text-muted-foreground" },
    { label: "Total Instructors", key: "totalInstructors", icon: Shield, color: "text-muted-foreground" },
    { label: "Total Courses", key: "totalCourses", icon: BookOpen, color: "text-muted-foreground" },
    { label: "Platform Revenue", key: "totalRevenue", icon: DollarSign, color: "text-muted-foreground", prefix: "₹" },
];

export const EARNINGS_OVERVIEW_CONFIG: DashboardStatConfig[] = [
    { label: "Gross Revenue", key: "totalRevenue", icon: DollarSign, color: "text-gray-500", prefix: "₹" },
    { label: "Platform Fees (20%)", key: "platformFee", icon: CreditCard, color: "text-red-400", prefix: "-₹" },
    { label: "Net Earnings (Available)", key: "netEarnings", icon: Banknote, color: "text-green-600", prefix: "₹", highlight: true },
];

export const INSTRUCTOR_ONBOARDING_BENEFITS: OnboardingBenefit[] = [
    { title: "Why Complete Onboarding?", icon: CheckCircle, items: ["Showcase your expertise", "Build trust with students", "Get approved to create courses"] },
    { title: "Quick Process", icon: Clock, content: "It only takes a few minutes to complete your profile and start your teaching journey." },
    { title: "Start Teaching", icon: Award, content: "Once approved, you can create courses and start earning from your expertise." },
];

export const INSTRUCTOR_NEXT_STEPS: OnboardingStep[] = [
    { text: "Admin reviews your application", icon: CheckCircle, color: "text-green-600" },
    { text: "Review typically takes 24-48 hours", icon: Clock, color: "text-yellow-600" },
    { text: "Once approved, you can start creating courses", icon: Award, color: "text-purple-600" },
];

export const CATEGORY_ICONS: Record<string, unknown> = {
    'Web Development': Code,
    'Mobile App Development': Smartphone,
    'Data Science': Database,
    'Machine Learning': Brain,
    'UI/UX Design': Layout,
    'Digital Marketing': Share2,
    'Blockchain': Blocks,
    'Cloud Computing': Cloud,
    'Cybersecurity': Shield,
    'Business & Entrepreneurship': Briefcase,
    'Health & Wellness': Heart,
    'Photography & Video': Camera,
    'Personal Development': Star,
    'Language Learning': Globe,
    'Music Production': Music,
};

export const CATEGORY_COLORS: Record<string, { gradient: string; bg: string }> = {
    'Web Development': { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
    'Mobile App Development': { gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50' },
    'Data Science': { gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50' },
    'Machine Learning': { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' },
    'UI/UX Design': { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-50' },
    'Digital Marketing': { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-50' },
    'Blockchain': { gradient: 'from-yellow-500 to-yellow-600', bg: 'bg-yellow-50' },
    'Cloud Computing': { gradient: 'from-sky-500 to-sky-600', bg: 'bg-sky-50' },
    'Cybersecurity': { gradient: 'from-red-500 to-red-600', bg: 'bg-red-50' },
    'Business & Entrepreneurship': { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50' },
    'Health & Wellness': { gradient: 'from-rose-500 to-rose-600', bg: 'bg-rose-50' },
    'Photography & Video': { gradient: 'from-violet-500 to-violet-600', bg: 'bg-violet-50' },
    'Personal Development': { gradient: 'from-amber-500 to-amber-600', bg: 'bg-amber-50' },
    'Language Learning': { gradient: 'from-lime-500 to-lime-600', bg: 'bg-lime-50' },
    'Music Production': { gradient: 'from-fuchsia-500 to-fuchsia-600', bg: 'bg-fuchsia-50' },
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        company: 'TechCorp',
        avatar: 'SJ',
        content: 'LearnHub transformed my career! I went from knowing nothing about coding to landing a job as a frontend developer in just 6 months. The courses are practical and the instructors are amazing.',
        rating: 5,
        course: 'Complete Web Development Bootcamp'
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Data Scientist',
        company: 'DataFlow Inc',
        avatar: 'MC',
        content: 'The Python for Data Science course was exactly what I needed. I learned real-world applications and now I\'m working on exciting machine learning projects. Highly recommended!',
        rating: 5,
        course: 'Python for Data Science and Machine Learning'
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'UX Designer',
        company: 'Design Studio',
        avatar: 'ER',
        content: 'As a complete beginner in design, I was worried about learning the ropes. But the design courses on LearnHub made everything so accessible and fun to learn.',
        rating: 5,
        course: 'UI/UX Design Masterclass'
    },
    {
        id: '4',
        name: 'David Thompson',
        role: 'Marketing Manager',
        company: 'Growth Marketing',
        avatar: 'DT',
        content: 'The business and marketing courses helped me understand digital marketing strategies that I could immediately apply to my work. Great ROI on my learning investment!',
        rating: 5,
        course: 'Digital Marketing Mastery'
    },
    {
        id: '5',
        name: 'Lisa Wang',
        role: 'Mobile Developer',
        company: 'AppWorks',
        avatar: 'LW',
        content: 'I learned React Native from scratch and built my first mobile app within weeks. The step-by-step approach and real projects made all the difference.',
        rating: 5,
        course: 'React Native Complete Guide'
    },
    {
        id: '6',
        name: 'James Wilson',
        role: 'DevOps Engineer',
        company: 'CloudTech',
        avatar: 'JW',
        content: 'The AWS certification course was comprehensive and up-to-date. I passed my exam on the first try and got a significant salary increase. Thank you LearnHub!',
        rating: 5,
        course: 'AWS Certified Solutions Architect'
    }
];

export const INSTRUCTOR_SIDEBAR_ITEMS = [
    { title: 'Dashboard', href: '/instructor/dashboard', icon: LayoutDashboard },
    { title: 'My Courses', href: '/instructor/courses', icon: BookOpen },
    { title: 'Create Course', href: '/instructor/courses/create', icon: Plus },
    { title: 'Students', href: '/instructor/students', icon: Users },
    { title: 'Payout', href: '/instructor/payout', icon: Banknote },
    { title: 'Settings', href: '/instructor/settings', icon: Settings },
];

export const ADMIN_SIDEBAR_ITEMS = [
    { title: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'Users', href: '/admin/users', icon: Users },
    { title: 'Instructors', href: '/admin/instructors', icon: Shield },
    { title: 'Courses', href: '/admin/courses', icon: BookOpen },
    { title: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { title: 'Payments', href: '/admin/payments', icon: DollarSign },
];

export const STUDENT_SIDEBAR_ITEMS = [
    { title: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
    { title: 'My Courses', href: '/student/courses', icon: BookOpen },
    { title: 'Certificates', href: '/student/certificates', icon: Award },
    { title: 'Profile', href: '/student/profile', icon: User },
];

export const COURSE_LEVEL_COLORS: Record<string, string> = {
  beginner: 'bg-green-100 text-green-800 hover:bg-green-100',
  beginner_to_intermediate: 'bg-green-50 text-green-700 hover:bg-green-50',
  intermediate: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  intermediate_to_advanced: 'bg-orange-100 text-orange-800 hover:bg-orange-100',
  beginner_to_advanced: 'bg-orange-50 text-orange-700 hover:bg-orange-50',
  advanced: 'bg-red-100 text-red-800 hover:bg-red-100',
};

export const COURSE_LEVEL_LABELS: Record<string, string> = {
  beginner: 'Beginner',
  beginner_to_intermediate: 'Beginner to Intermediate',
  intermediate: 'Intermediate',
  intermediate_to_advanced: 'Intermediate to Advanced',
  beginner_to_advanced: 'Beginner to Advanced',
  advanced: 'Advanced',
};

export const COURSE_LEVELS = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'beginner_to_intermediate', label: 'Beginner to Intermediate' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'intermediate_to_advanced', label: 'Intermediate to Advanced' },
  { value: 'beginner_to_advanced', label: 'Beginner to Advanced' },
  { value: 'advanced', label: 'Advanced' },
];

export const CONTENT_TYPES = [
  { value: 'video', label: 'Video (MP4, MKV)' },
  { value: 'pdf', label: 'Document (PDF)' },
  { value: 'article', label: 'Article' },
  { value: 'quiz', label: 'Quiz' },
];

export const USER_ROLES = [
    { value: 'all', label: 'All Roles' },
    { value: 'student', label: 'Student' },
    { value: 'instructor', label: 'Instructor' },
    { value: 'super_admin', label: 'Super Admin' },
];

export const USER_STATUSES = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'suspended', label: 'Suspended' },
    { value: 'banned', label: 'Banned' },
];

export const PRICE_FILTER_OPTIONS = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' },
];

export const ANALYTICS_PERIODS = [
  { value: 'all', label: 'Last 90 Days' },
  { value: 'month', label: 'This Month' },
  { value: 'year', label: 'This Year' },
];

export const NAV_LINKS = [
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
];

export const ROLE_DASHBOARD_MAPPING: Record<string, string> = {
    super_admin: '/admin/dashboard',
    instructor: '/instructor/dashboard',
    student: '/student/dashboard',
};

export const COURSE_STATUS = {
    DRAFT: 'draft',
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
};

export const ENROLLMENT_STATUS = {
    ACTIVE: 'active',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

export const APPLICATION_STATUS = {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
};

export const UI_STATUS_STYLES: Record<string, string> = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    draft: 'bg-gray-100 text-gray-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    suspended: 'bg-orange-100 text-orange-800',
    banned: 'bg-red-100 text-red-800',
    published: 'bg-green-100 text-green-800',
};

export const COURSE_STATUS_COLORS = {
    draft: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
};

export const GLOBAL_CONSTANTS = {
    PLATFORM_FEE_PERCENTAGE: 0.20, // 20%
    MAX_THUMBNAIL_SIZE_MB: 5,
    MAX_VIDEO_SIZE_MB: 100,
    THUMBNAIL_RECOMMENDED_SIZE: '1280x720px',
    PLATFORM_NAME: 'LearnHub',
    TAGLINE: 'Transform your future with world-class education. Access thousands of courses from top instructors worldwide.',
    CONTACT: {
        EMAIL: 'hello@learnhub.com',
        PHONE: '+1 (555) 123-4567',
        ADDRESS: 'San Francisco, CA',
    }
};

/** Instructor pending approval - layout me dikhne wala screen. */
export const INSTRUCTOR_PENDING_APPLICATION = {
    TITLE: 'Instructor Application Submitted',
    MESSAGE: 'Your request has been submitted to the admin. The admin will review and approve your application within 24 hours.',
    CONTACT_HINT: 'If you need faster assistance, please contact support.',
    CONTACT_BTN: 'Contact Support',
    GO_HOME_BTN: 'Go to Home',
};

/** Course learn page - enrollment required, no content, toasts. */
export const COURSE_LEARN = {
    ENROLL_REQUIRED: 'You need to enroll in this course first.',
    GO_TO_COURSE: 'Go to Course Page',
    NO_CONTENT: 'No content available for this course yet.',
    COURSE_CONTENT_TITLE: 'Course Content',
    PROGRESS_LABEL: 'Progress',
    COMPLETE_COURSE_BTN: 'Complete Course',
    COMPLETING: 'Completing...',
    COMPLETED_TOAST: 'Course completed! Your certificate has been generated. Redirecting to certificates...',
    COMPLETE_FAILED_TOAST: 'Failed to complete course',
    CONTENT_COMPLETED_TOAST: 'Content marked as completed!',
};

/** Course details - enrollment flow, buttons, dialogs, not found. */
export const COURSE_DETAILS = {
    NOT_FOUND: 'Course Not Found',
    NOT_FOUND_MSG: "The course you're looking for doesn't exist or has been removed.",
    ENROLL_FREE: 'Enroll Free',
    ENROLL_NOW: 'Enroll Now',
    SIGN_IN_TO_ENROLL: 'Sign In to Enroll',
    GO_TO_DASHBOARD: 'Go to Dashboard',
    ENROLLING: 'Enrolling...',
    ONLY_STUDENTS: 'Only students can enroll in courses.',
    ALREADY_ENROLLED: 'Already Enrolled',
    ENROLLMENT_SUCCESS: 'Enrollment Successful',
    ALREADY_ENROLLED_MSG: 'You are already enrolled in this course. Click below to continue from your dashboard.',
    ENROLLMENT_SUCCESS_MSG: 'You have been enrolled successfully. Click below to go to your student dashboard.',
    ENROLLMENT_FAILED: 'Enrollment failed. Please try again.',
    STUDENTS_LABEL: 'students',
    STAY_HERE: 'Stay Here',
};

/** Instructor dashboard - recent enrollments, contact, etc. */
export const INSTRUCTOR_DASHBOARD = {
    // Welcome
    WELCOME_TITLE: (name: string) => `Welcome back, ${name}! 👨‍🏫`,
    WELCOME_SUBTITLE: 'Your courses are helping students transform their careers. Keep up the great work!',

    // Stats subtext
    STATS_PUBLISHED: (count: number) => `${count} published`,
    STATS_ACROSS_COURSES: 'Across all courses',
    STATS_THIS_MONTH: (amount: number) => `+₹${(amount ?? 0).toLocaleString('en-IN')} this month`,
    STATS_CERTIFICATES: 'Issued to students',

    // Onboarding incomplete
    ONBOARDING_TITLE: 'Complete Your Instructor Profile',
    ONBOARDING_DESC: 'To start teaching on LearnHub, please complete your instructor onboarding. This helps us understand your expertise and ensures quality education for our students.',
    ONBOARDING_CTA: 'Complete Onboarding',
    ONBOARDING_LEARN_MORE: 'Learn More',

    // Pending approval
    PENDING_TITLE: 'Application Under Review',
    PENDING_BADGE: 'Pending',
    PENDING_DESC: "Thank you for submitting your instructor application! Our admin team is currently reviewing your profile. You'll receive a notification once your application has been reviewed, typically within 24-48 hours.",
    PENDING_NEXT_TITLE: 'What happens next?',
    PENDING_APP_DETAILS: 'Application Details',
    PENDING_STATUS_LABEL: 'Status:',
    PENDING_STATUS_VALUE: 'Pending Review',
    PENDING_SUBMITTED_LABEL: 'Submitted:',
    PENDING_NEED_HELP: 'Need Help?',
    PENDING_HELP_DESC: 'If you have questions about your application, please contact our support team.',

    // Rejected
    REJECTED_TITLE: 'Application Not Approved',
    REJECTED_BADGE: 'Rejected',
    REJECTED_DESC: "Unfortunately, your instructor application was not approved at this time. You can review your application and submit a new one with updated information.",
    REJECTED_REASON_TITLE: 'Reason:',
    REJECTED_RESUBMIT: 'Submit New Application',

    // Recent courses
    RECENT_COURSES: 'Recent Courses',
    RECENT_COURSES_DESC: 'Manage your course portfolio',
    CREATE_COURSE: 'Create Course',
    NO_COURSES_YET: 'No courses yet',
    CREATE_FIRST_COURSE: 'Create Your First Course',
    VIEW: 'View',
    STUDENTS_LABEL: (count: number) => `${count} students`,
    UPDATED: (time: string) => `Updated ${time}`,

    // Enrollments
    RECENT_ENROLLMENTS: 'Recent Enrollments',
    RECENT_ENROLLMENTS_DESC: 'New students joining your courses',
    NO_RECENT_ENROLLMENTS: 'No recent enrollments',
    UNKNOWN_COURSE: 'Unknown Course',
    ANONYMOUS_STUDENT: 'Anonymous Student',

    // Payout
    PAYOUT_WITHDRAWAL_TOOLTIP: 'Indian banks take up to 7 days to process withdrawals',
    PAYOUT_TITLE: 'Payout Account',
    PAYOUT_AVAILABLE_DESC: 'Your bank payout details are available. You can review or update them anytime.',
    PAYOUT_ADD_DESC: 'Add your bank account details to receive instructor payouts.',
    PAYOUT_MANAGE: 'Manage Payout Details',
    PAYOUT_ADD: 'Add Payout Details',
    PAYOUT_MANAGE_BTN: 'Manage Payouts',
    PAYOUT_ADD_BTN: 'Add Payouts',

    // Quick actions
    QUICK_ACTIONS: 'Quick Actions',
    QUICK_ACTIONS_DESC: 'Common tasks to help you manage your courses',
    QUICK_CREATE_COURSE: 'Create New Course',
    QUICK_VIEW_STUDENTS: 'View All Students',

    // Misc
    CONTACT_SUPPORT: 'Contact Support',
    SUBMITTED: 'Submitted',
    ENROLLMENT_TRENDS: 'Enrollment Trends',
    ENROLLMENT_TRENDS_DESC: 'Student enrollments over time',
    NO_ENROLLMENT_DATA: 'No enrollment data available',
    ENROLLMENTS_BY_COURSE: 'Enrollments by course',
    COURSE_PERFORMANCE: 'Course Performance',
    NO_COURSE_DATA: 'No course data available',

    // Time formatting
    TIME_JUST_NOW: 'Just now',
    TIME_HOUR_AGO: (n: number) => `${n} hour${n > 1 ? 's' : ''} ago`,
    TIME_DAY_AGO: (n: number) => `${n} day${n > 1 ? 's' : ''} ago`,
    TIME_RECENTLY: 'Recently',
    NA: 'N/A',
};

/** Instructor courses - students modal, status filters, etc. */
export const INSTRUCTOR_COURSES = {
    VIEW_STUDENTS: 'View Students',
    ENROLLED_STUDENTS: 'Enrolled Students',
    ENROLLED_STUDENTS_DESC: 'View all students enrolled in this course and their progress',
    NO_STUDENTS_ENROLLED: 'No students enrolled in this course yet',
    TOTAL_ENROLLED: 'Total Enrolled',
    ENROLLED: 'Enrolled',
    COMPLETED: 'Completed',
    STUDENTS_LABEL: 'students',
    STATUS_FILTERS: [
        { value: 'all', label: 'All' },
        { value: 'draft', label: 'Draft' },
        { value: 'pending', label: 'Pending' },
        { value: 'approved', label: 'Approved' },
        { value: 'published', label: 'Published' },
        { value: 'rejected', label: 'Rejected' },
    ] as const,
};

/** Student dashboard - empty states, labels. Shared fallbacks for course/instructor/student names. */
export const STUDENT_DASHBOARD = {
    UNTITLED_COURSE: 'Untitled Course',
    UNKNOWN_INSTRUCTOR: 'Unknown',
    UNKNOWN_INSTRUCTOR_FULL: 'Unknown Instructor',
    UNKNOWN_STUDENT: 'Unknown Student',
    BTN_REVIEW: 'Give Review',
    BTN_REVISIT: 'Revisit Course',
};

/** Student certificates - empty state. */
export const STUDENT_CERTIFICATES = {
    NO_CERTIFICATES_YET: 'No certificates yet',
    EMPTY_MSG: 'Complete your enrolled courses to earn certificates. Certificates will appear here once you finish a course.',
    BROWSE_COURSES: 'Browse Courses',
};

/** Admin instructors - application management, tabs, labels. */
export const ADMIN_INSTRUCTORS = {
    TITLE: 'Instructor Management',
    SUBTITLE: 'Review and manage instructor applications',
    APPLICATIONS: 'Applications',
    TABS: { PENDING: 'Pending', APPROVED: 'Approved', REJECTED: 'Rejected' },
    NO_APPLICATIONS: (status: string) => `No ${status} applications found`,
    TABLE: {
        INSTRUCTOR: 'Instructor',
        EXPERTISE: 'Expertise',
        EXPERIENCE: 'Experience',
        APPLIED_DATE: 'Applied Date',
        STATUS: 'Status',
        ACTIONS: 'Actions',
    },
    DIALOG: {
        TITLE: 'Application Details',
        DESC: 'Review instructor application information',
        EXPERIENCE: 'Experience',
        EDUCATION: 'Education',
        APPLIED_ON: 'Applied On',
        EXPERTISE_AREAS: 'Expertise Areas',
        BIO_TITLE: 'Bio / Professional Summary',
        LINKEDIN: 'LinkedIn Profile',
        CLOSE: 'Close',
        REJECT: 'Reject',
        APPROVE: 'Approve Application',
    },
    TOAST: {
        APPROVED: 'Instructor application approved',
        REJECTED: 'Instructor application rejected',
        APPROVE_FAILED: 'Failed to approve application',
        REJECT_FAILED: 'Failed to reject application',
    },
    YEARS: (n: number) => `${n} years`,
    YEARS_LABEL: (n: number) => `${n} Years`,
};

/** Instructor students page. */
export const INSTRUCTOR_STUDENTS = {
    OVERVIEW_DESC: 'Overview of all students enrolled in your courses.',
    TOTAL_ENROLLMENTS: 'Total Enrollments',
    ENROLLMENTS_BREAKDOWN: 'Enrollments Breakdown',
    ENROLLMENTS_BREAKDOWN_DESC: 'Student count per individual course. To see individual student details, go to the Courses tab and click "View Students" on a specific course.',
    ENROLLED: 'enrolled',
};

export const CONFIRMATION_MESSAGES = {
    DELETE_CONTENT_DESC: 'Are you sure you want to delete this content? This action cannot be undone.',
    DELETE_COURSE: 'Are you sure you want to delete this course? This action cannot be undone.',
    SUSPEND_USER: 'Are you sure you want to suspend this user? They will not be able to access the platform until reactivated.',
    LOGOUT: 'Are you sure you want to log out?',
    DELETE_ACCOUNT: 'This action cannot be undone. All your data will be permanently deleted.',
    DEMO_MODE_RESTRICTION: 'Account deletion is not available in demo mode',
};

/** Course create form - max lengths, placeholders, validation. Ek jagah change karo, sab jagah reflect. */
export const COURSE_CREATE_FORM = {
    TITLE_MAX_LENGTH: 200,
    SHORT_DESC_MAX_LENGTH: 500,
    PLACEHOLDERS: {
        TITLE: 'e.g., Complete Web Development Bootcamp',
        SHORT_DESC: 'A brief overview of your course (displayed in course cards)',
        FULL_DESC: 'Detailed description of your course content, goals, and target audience',
        CATEGORY: 'Select a category',
        CATEGORY_LOADING: 'Loading categories...',
        CATEGORY_NO_OPTIONS: 'No categories available',
        PRICE: '0.00',
        LANGUAGE: 'English',
        TAG: 'Add a tag (e.g., JavaScript, React, Web Dev)',
        REQUIREMENT: 'e.g., Basic HTML knowledge',
        OUTCOME: 'e.g., Build responsive websites',
    },
    HINTS: {
        TITLE_CHARS: (len: number, max: number) => `${len}/${max} characters`,
        THUMBNAIL: (size: string, maxMb: number) => `Recommended: ${size}, Max ${maxMb}MB`,
        THUMBNAIL_URL: 'Paste image URL (e.g. from Unsplash, Imgur)',
        FREE_COURSE: 'Set to 0 for free courses',
        DISCOUNT: 'For showing discounts',
        REQUIREMENTS: 'What students need to know before taking this course',
        OUTCOMES: 'What will students learn from this course',
    },
};

export const COURSE_PLAYER = {
    /** 90% video dekha to auto-complete mark - student ko manually click nahi karna. */
    AUTO_COMPLETE_THRESHOLD: 0.9,
    /** Progress save interval (ms) - har 5 sec backend ko bhejte hain. */
    PROGRESS_INTERVAL_MS: 5000,
    /** Article/PDF time tracking - har 10 sec backend ko bhejte hain. */
    ARTICLE_PDF_TRACK_INTERVAL_MS: 10000,
};

/** Featured courses homepage par kitne dikhane - limit 6, page 1. */
export const FEATURED_COURSES_QUERY = { limit: 6, page: 1 };

export const SEARCH_PLACEHOLDER = 'Search courses...';

/** Course create - validation errors, success, toasts. */
export const COURSE_CREATE_MESSAGES = {
    TITLE_REQUIRED: 'Course title is required',
    DESC_REQUIRED: 'Course description is required',
    CATEGORY_REQUIRED: 'Please select a category',
    THUMBNAIL_TOO_LARGE: (maxMb: number) => `Thumbnail must be less than ${maxMb}MB`,
    APPROVAL_REQUIRED: 'Your instructor application must be approved before creating a course.',
    SUCCESS: 'Course created successfully!',
    DRAFT_SAVED: 'Draft saved! Continue to add more details.',
    FAILED: 'Failed to create course',
    SAVE_AND_ADD_CONTENT: 'Save & Add Content',
};

export const COURSE_EDIT_CONFIG = {
    TABS: [
        { label: 'Course Content', value: 'content' },
        { label: 'Basic Settings', value: 'settings' },
    ],
    CONTENT_EMPTY: {
        TITLE: 'No content uploaded',
        DESC: 'Start building your course by adding your first lecture.',
        BUTTON: 'Add Course Content',
    },
    MANAGEMENT: {
        BACK_TO_COURSES: 'Back to Courses',
        CURRICULUM_TITLE: 'Curriculum',
        CURRICULUM_DESC: 'Add and arrange lectures, videos, and reading materials.',
        COURSE_SETTINGS_TITLE: 'Course Settings',
        COURSE_SETTINGS_DESC: 'These options can be managed before the course is approved.',
        NOTE_TITLE: 'Note on Editing Basics',
        NOTE_DESC: 'To completely change the title, description, or pricing of this course, please use the main Edit button from your dashboard if the course is still a draft. Once approved, major changes may require admin review.',
    },
    ADD_CONTENT_MODAL: {
        TITLE: 'Add Course Content',
        EDIT_TITLE: 'Edit Content',
        DESC: 'Upload videos (MP4) or documents (PDF) for your course module.',
        EDIT_DESC: 'Update the content details below.',
        FIELDS: {
            TITLE: 'Content Title *',
            TITLE_PLACEHOLDER: 'e.g., Introduction to React',
            TYPE: 'Content Type *',
            DURATION: 'Video Duration (seconds) *',
            DURATION_PLACEHOLDER: 'e.g., 360',
            DURATION_PLACEHOLDER_MINS: 'e.g., 5',
            UPLOAD: 'Upload File *',
            UPLOAD_OPTIONAL_HINT: '(optional - leave empty to keep existing)',
            UPLOAD_SELECT_VIDEO: 'Select Video',
            UPLOAD_SELECT_PDF: 'Select PDF',
            ARTICLE_CONTENT: 'Content (optional if URL provided)',
            ARTICLE_CONTENT_PLACEHOLDER: 'Enter article content...',
            ARTICLE_URL: 'URL (optional if content provided)',
            ARTICLE_URL_PLACEHOLDER: 'https://...',
            PREVIEW: 'Preview',
        },
        SUBMIT: 'Add Content',
        SUBMIT_EDIT: 'Update Content',
        LOADING_ADD: 'Adding...',
        LOADING_UPDATE: 'Updating...',
        LOADING_UPLOAD: 'Uploading...',
    },
    DELETE_MODAL: {
        TITLE: 'Delete Content',
    },
};

/** Video lecture creation - sab UI strings ek jagah. Lecture banate waqt ye constants use karo. */
export const VIDEO_LECTURE_UI = {
    /** Page titles */
    PAGE: {
        CREATE: 'Create New Course',
        EDIT: 'Edit Course',
        SUBTITLE_DRAFT: 'Complete the steps and add content.',
        SUBTITLE_STEP1: 'Step 1: Add basic info, then save as draft.',
    },
    /** Step 1 - Basic Info */
    STEP1: {
        TITLE: 'Basic Information',
        DESC: 'Fill required fields. Click Continue to save as draft.',
        COURSE_TITLE: 'Course Title *',
        SHORT_DESC: 'Short Description',
        FULL_DESC: 'Full Description *',
        CATEGORY: 'Category *',
        PREVIEW_LABEL: 'Course Preview (optional) - Thumbnail OR Video',
        PREVIEW_HINT: 'Choose one: thumbnail image or promo video preview',
        MEDIA_THUMBNAIL: 'Thumbnail',
        MEDIA_VIDEO: 'Video Preview',
        OR_PASTE_URL: 'or paste URL below',
        URL_PLACEHOLDER_IMAGE: 'https://example.com/image.jpg',
        URL_PLACEHOLDER_VIDEO: 'https://example.com/video.mp4',
        SAVING_DRAFT: 'Saving draft...',
        CONTINUE_SAVE_DRAFT: 'Continue → Save as Draft',
    },
    /** Step 2 - Pricing */
    STEP2: {
        TITLE: 'Pricing & Course Details',
        DESC: 'Set pricing, level, language and tags',
        PRICE: 'Price (INR)',
        ORIGINAL_PRICE: 'Original Price (INR)',
        LEVEL: 'Course Level',
        LANGUAGE: 'Language',
        TAGS: 'Tags',
        ADD: 'Add',
        CONTINUE_REQUIREMENTS: 'Continue → Requirements',
    },
    /** Step 3 - Requirements */
    STEP3: {
        REQUIREMENTS: 'Requirements',
        OUTCOMES: 'Learning Outcomes',
    },
    /** File upload - accept attributes */
    FILE_ACCEPT: {
        IMAGE: 'image/*',
        VIDEO: 'video/*',
        PDF: '.pdf',
    },
    /** Content types - value matches backend */
    CONTENT_TYPE_VALUES: ['video', 'pdf', 'article', 'quiz'] as const,
    DEFAULT_CONTENT_TYPE: 'video' as const,
    /** Toast messages */
    TOAST: {
        CONTENT_ADDED: 'Content added successfully!',
        CONTENT_UPDATED: 'Content updated successfully!',
        CONTENT_DELETED: 'Content deleted!',
        UPLOAD_SUCCESS: 'Uploaded to Cloudinary!',
        UPLOAD_FAILED: 'Upload failed',
        FILE_UPLOAD_FAILED: 'File upload failed',
        TITLE_REQUIRED: 'Title is required',
        FILE_REQUIRED: 'File is required for video/PDF',
        ARTICLE_REQUIRED: 'Content or URL is required for article',
        QUIZ_REQUIRED: 'Add at least one question with options for quiz',
        SAVED: 'Saved!',
        DETAILS_SAVED: 'Details saved!',
    },
    /** Validation */
    VALIDATION: {
        STEP1_FIRST: 'Please complete Step 1 first',
    },
};

export const SECTION_CONTENT = {
    HERO: {
        TITLE_START: 'Learn from the',
        TITLE_HIGHLIGHT: 'Best',
        TITLE_END: 'Instructors',
        SUBTITLE: 'Transform your career with world-class courses from industry experts. Join millions of learners worldwide and unlock your potential.',
        CTA_EXPLORE: 'Explore Courses',
        CTA_GET_STARTED: 'Get Started',
        LEARNER_COUNT: 'Join 50,000+ learners',
        RATING: '4.9/5 rating',
    },
    FEATURED_COURSES: {
        TITLE: 'Featured Courses',
        SUBTITLE: 'Discover our most popular courses handpicked by our team. Start your learning journey with these top-rated courses.',
        VIEW_ALL: 'View All Courses',
        NO_COURSES: 'No courses available at the moment. Check back soon for new courses!',
    },
    CATEGORIES: {
        TITLE: 'Explore by Category',
        SUBTITLE: 'Find the perfect course in your area of interest. We have courses covering all major fields and industries.',
        BROWSE_ALL: 'Browse All Categories',
        NO_CATEGORIES: 'No categories available at the moment. Check back soon!',
    },
    ONBOARDING: {
        TITLE: 'Complete Your Instructor Profile',
        SUBTITLE: 'Tell us about yourself to become an instructor on LearnHub',
        CARD_TITLE: 'Instructor Application',
        CARD_DESCRIPTION: 'Fill in your details to apply as an instructor. All fields marked with * are required.',
        BIO_MIN_CHARS: 50,
    },
    STUDENT_PROFILE: {
        TITLE: 'My Profile',
        SUBTITLE: 'Manage your account settings and preferences',
        STATS_TOTAL_COURSES: 'Total Courses',
        STATS_COMPLETED: 'Completed',
        STATS_MEMBER_SINCE: 'Member Since',
        SECTION_INFO_TITLE: 'Profile Information',
        SECTION_INFO_DESC: 'Update your personal information and public profile',
        SECTION_SECURITY_TITLE: 'Security Settings',
        SECTION_SECURITY_DESC: 'Manage your password and account security',
        DANGER_ZONE_TITLE: 'Danger Zone',
        DANGER_ZONE_DESC: 'Irreversible actions that affect your account',
        DELETE_ACCOUNT_WARNING: 'Are you absolutely sure you want to delete your account? This will:',
        DELETE_ACCOUNT_BULLETS: [
            'Remove all your course enrollments',
            'Delete all your progress and certificates',
            'Permanently delete your account data',
        ],
    },
    TESTIMONIALS: {
        TITLE: 'What Our Students Say',
        SUBTITLE: 'Join thousands of successful learners who have transformed their careers with our courses. Here are some of their stories.',
        CTA_TITLE: 'Ready to Start Your Learning Journey?',
        CTA_SUBTITLE: 'Join millions of learners worldwide and unlock your potential with our world-class courses and expert instructors.',
        CTA_PRIMARY: 'Get Started Today',
        CTA_SECONDARY: 'Browse Courses',
    },
    FOOTER: {
        CATEGORIES: {
            PLATFORM: 'Platform',
            RESOURCES: 'Resources',
            LEGAL: 'Legal',
        },
        RIGHTS_RESERVED: 'All rights reserved.',
    },
    STUDENT_DASHBOARD: {
        WELCOME: 'Welcome back',
        TAGLINE: 'Continue your learning journey and unlock new skills today.',
        STATS_TOTAL_COURSES: 'Total Courses',
        STATS_LEARNING_HOURS: 'Learning Hours',
        STATS_CERTIFICATES: 'Certificates',
        STATS_STREAK: 'Current Streak',
        CONTINUE_LEARNING_TITLE: 'Continue Learning',
        CONTINUE_LEARNING_DESC: 'Pick up where you left off',
        BTN_CONTINUE: 'Continue',
        BTN_REVIEW: 'Give Review',
        BTN_REVISIT: 'Revisit Course',
        BROWSE_MORE_COURSES: 'Browse more courses',
        COURSES_IN_PROGRESS_TITLE: 'Courses In Progress',
        COURSES_IN_PROGRESS_DESC: 'Keep learning and complete your courses',
        QUICK_ACTIONS_TITLE: 'Quick Actions',
        NO_ENROLLMENTS: 'No courses enrolled yet',
        NO_ENROLLMENTS_SUB: 'Visit the Course Catalog from the sidebar to explore courses',
        NO_IN_PROGRESS: 'No courses in progress',
    },
    COURSES_PAGE: {
        TITLE: 'Explore Our Courses',
        SUBTITLE: 'Discover thousands of courses from expert instructors',
        SEARCH_PLACEHOLDER: 'Search for courses, skills, or instructors...',
        CLEAR_FILTERS: 'Clear All Filters',
        NO_COURSES_FOUND: 'No courses found',
        NO_COURSES_DESC: 'Try adjusting your search criteria or browse all courses',
        LOAD_MORE: 'Load More Courses',
    }
};

export const STATUS_ICONS: Record<string, unknown> = {
    active: CheckCircle,
    approved: CheckCircle,
    completed: CheckCircle,
    pending: Clock,
    suspended: UserX,
    rejected: XCircle,
    banned: XCircle,
    draft: Clock,
    published: CheckCircle,
};

export const COMMON_LABELS = {
    SAVE_CHANGES: 'Save Changes',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
    EDIT: 'Edit',
    VIEW: 'View',
    SUBMIT: 'Submit',
    LOADING: 'Loading...',
    SAVING: 'Saving...',
    UPDATING: 'Updating...',
    DELETING: 'Deleting...',
    NO_DATA: 'No data found',
    REQUIRED_FIELD: 'This field is required',
};
