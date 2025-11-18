import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { SignUpForm } from '../_components';

function SignUp() {
  return (
    <>
      <SignUpForm />
      <p className='text-center'>or sign in with</p>
      {/* <SignInProviders /> */}
      <hr />
      <Link href='/sign-in' className='flex items-center gap-2 text-sm font-semibold text-gray-2'>
        Already have an account? Sign in
        <span className='p-2 border border-black rounded-full'>
          <ArrowRightIcon className='size-3' />
        </span>
      </Link>
    </>
  );
};

export default SignUp;