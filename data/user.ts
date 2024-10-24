import {prisma} from '@/lib/db';

export const getUserByEmail = async (email: string) => {
    try{
        const user = await prisma.user.findUnique({where:{email}})
        return user;
    }catch(error){
        return null;
    }
}

export const getUserById = async (email: string) => {
    try{
        const user = await prisma.user.findUnique({where:{email}})
        return user;
    }catch(error){
        return null;
    }
}