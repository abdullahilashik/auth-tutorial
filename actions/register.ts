"use server";

import { prisma } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validated = RegisterSchema.safeParse(values);
    
    if(!validated.success){
        return {error: 'Invalid credentials'}
    }

    const {name, email, password} = validated.data;

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error: 'Email already taken'}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return {success: 'User created'}
}