import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please provide a valid email'
    }),
    password: z.string().min(3, {
        message: 'Minimum length is 3'
    })
});