"use client"

import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import React, {useState, useTransition} from 'react'
import CardWrapper from './card-wraper'
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from '../form-error';
import FormSuccess from '../form-success';
import { login } from '@/actions/login';

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    startTransition(()=>{
      login(values)
        .then(data => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  }
  return (
    <CardWrapper
            headerLabel='Welcome back'
            backButtonLabel='Don&quote;t have an account'
            backButtonHref='/auth/register'
            showSocial
        >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name='email'
                  render={({field})=> (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          disabled={isPending}
                          placeholder='contact@makehub.com.bd'
                          type='email'
                        />
                        
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({field})=> (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          disabled={isPending}
                          placeholder='*******'
                          type='password'
                        />
                        
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormSuccess message={success}/>
              <FormError message={error}/>
            <Button type='submit' className='w-full' variant={'default'}>Login</Button>
          </form>
        </Form>
    </CardWrapper>
  )
}

export default LoginForm