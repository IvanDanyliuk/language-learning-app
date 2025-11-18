import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { SignInForm, SignInProviders } from '../_components';

function SignIn() {
  return (
    <>
      <SignInForm />
      <p className='text-center'>or sign in with</p>
      <SignInProviders />
      <hr />
      <Link href='/sign-up' className='flex items-center gap-2 text-sm font-semibold text-gray-2'>
        Do not have an account? Sign up
        <span className='p-2 border border-black rounded-full'>
          <ArrowRightIcon className='size-3' />
        </span>
      </Link>
    </>
  );
};

export default SignIn;