import { Logo } from '@/components/general/Logo';
import '../globals.css';

export default function AuthLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <div className='p-10 w-screen h-screen flex flex-col justify-center items-center gap-6 bg-gray-300'>
      <Logo />
      <div className='p-10 w-full md:w-96 flex flex-col justify-center gap-6 rounded-xl bg-white'>
        <div>
          <h2 className='text-center text-xl font-semibold text-gray-2'>
            Welcome to
          </h2>
          <h1 className='text-center text-3xl font-bold text-gray-3'>
            LangMate
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};