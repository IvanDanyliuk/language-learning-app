import { z as zod } from 'zod';

export const signUpSchema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  email: zod.email({ pattern: zod.regexes.email, error: 'Wrong email format' }),
  password: zod.string().min(1, 'Password is required').min(6, 'Passowrd should contain at least 6 characters'),
  confirmPassword: zod.string().min(1, 'Password is required').min(6, 'Passowrd should contain at least 6 characters'),
  image: zod.any(),
}).refine((data) => data.password !== data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Password do not match',
});

export const signInSchema = zod.object({
  email: zod.email({ pattern: zod.regexes.email, error: 'Wrong email format' }),
  password: zod.string().min(1, 'Password is required').min(6, 'Passowrd should contain at least 6 characters'),
});

export type SignUpDataType = zod.infer<typeof signUpSchema>;
export type SignInDataType = zod.infer<typeof signInSchema>;