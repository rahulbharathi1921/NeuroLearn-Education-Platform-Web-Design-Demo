/**
 * Application Constants
 * Configuration and constant values used throughout the app
 */

export const APP_CONFIG = {
    name: 'NeuroLearn',
    version: '2.0.0',
    description: 'Enterprise-grade E-Learning Platform',
    author: 'NeuroLearn Team'
};

export const API_ENDPOINTS = {
    base: '/api/v1',
    courses: '/api/v1/courses',
    users: '/api/v1/users',
    progress: '/api/v1/progress',
    achievements: '/api/v1/achievements',
    social: '/api/v1/social'
};

export const GAMIFICATION_CONFIG = {
    xpPerLevel: 250,
    maxLevel: 100,
    streakBonus: 50,
    dailyChallengeXP: 100,
    achievementXP: {
        'first-course': 100,
        'week-streak': 250,
        'month-streak': 1000,
        'speed-learner': 500,
        'social-butterfly': 300
    }
};

export const BREAKPOINTS = {
    xs: 375,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};

export const ANIMATION_DURATION = {
    fast: 150,
    normal: 300,
    slow: 500
};

export const STORAGE_KEYS = {
    theme: 'neurolearn-theme',
    user: 'neurolearn-user',
    progress: 'neurolearn-progress',
    preferences: 'neurolearn-preferences'
};

export const COURSE_CATEGORIES = [
    { id: 'all', label: 'All Courses' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'web', label: 'Web Development' },
    { id: 'data', label: 'Data Science' },
    { id: 'cyber', label: 'Cybersecurity' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'cloud', label: 'Cloud Computing' }
];

export const DIFFICULTY_LEVELS = [
    { id: 'beginner', label: 'Beginner', color: '#00ff88' },
    { id: 'intermediate', label: 'Intermediate', color: '#ffcc00' },
    { id: 'advanced', label: 'Advanced', color: '#ff6b00' },
    { id: 'expert', label: 'Expert', color: '#ff3366' }
];

export const SOCIAL_TABS = [
    { id: 'discussion', label: 'Discussion Feed', icon: 'fa-comments' },
    { id: 'groups', label: 'Study Groups', icon: 'fa-users' },
    { id: 'qa', label: 'Peer Q&A', icon: 'fa-question-circle' },
    { id: 'activity', label: 'Live Activity', icon: 'fa-bolt' }
];

export const ENTERPRISE_TENANTS = [
    { id: 'engineering', label: 'Engineering', icon: 'fa-code', color: '#00f3ff' },
    { id: 'sales', label: 'Sales', icon: 'fa-chart-line', color: '#ff00ff' },
    { id: 'hr', label: 'HR', icon: 'fa-users', color: '#ff6b00' },
    { id: 'leadership', label: 'Leadership', icon: 'fa-crown', color: '#9d00ff' }
];

export const COMPLIANCE_BADGES = [
    { id: 'gdpr', label: 'GDPR Compliant', icon: 'fa-user-shield' },
    { id: 'iso', label: 'ISO 27001', icon: 'fa-certificate' },
    { id: 'soc', label: 'SOC 2 Type II', icon: 'fa-shield-alt' },
    { id: 'accessibility', label: 'WCAG 2.1 AA', icon: 'fa-universal-access' }
];

export const ERROR_MESSAGES = {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    notFound: 'The requested resource was not found.',
    unauthorized: 'You are not authorized to perform this action.',
    validation: 'Please check your input and try again.'
};

export const SUCCESS_MESSAGES = {
    saved: 'Changes saved successfully!',
    enrolled: 'Successfully enrolled in the course!',
    completed: 'Congratulations! Course completed!',
    shared: 'Content shared successfully!',
    copied: 'Copied to clipboard!'
};