'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpDataType, signUpSchema } from '@repo/schemas';
import { ActionButton } from '@/components/buttons/ActionButton';
import { TextField } from '@/components/inputs/TextField';


export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleFormSubmit = () => {

  };

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className='flex flex-col gap-3'
    >
      <TextField 
        placeholder='Name' 
        error={errors['name']?.message} 
        {...register('name')} 
      />
      <TextField 
        placeholder='Email' 
        error={errors['email']?.message} 
        {...register('email')} 
      />
      <TextField 
        placeholder='Password' 
        error={errors['password']?.message} 
        {...register('password')} 
      />
      <TextField 
        placeholder='Confirm password' 
        error={errors['confirmPassword']?.message} 
        {...register('confirmPassword')} 
      />
      <ActionButton title='Sign Up' />
    </form>
  );
};