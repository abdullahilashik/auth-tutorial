// allow all public routes
export const publicRoutes = [
    '/'
];

export const authRoutes = [
    '/auth/login',
    '/auth/register'
];

/**
 * Route used for APi auth prefixes. URLs that starts with this pattern is meant for authentication api.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';
export const DEFAULT_LOGIN_REDIRECT = '/setting'