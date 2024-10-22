import {Poppins} from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/login-button';

const font = Poppins({
  weight: ['600'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main 
      className="
        min-h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        flex-col 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500 to-teal-600
      ">
        <div className="space-y-6 text-center">
          <h1 className={cn(
            "text-6xl text-white font-bold",
            font.className
          )}>Auth</h1>
          <p className="text-white capitalize text-lg">a simple authentication practice</p>
          <div>
            <LoginButton>
              <Button variant={'secondary'} size={'lg'}>
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
  );
}
