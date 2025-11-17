import { Logo } from '@/components/general/Logo';
import '../globals.css';

export default function AuthLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-300'>
      <Logo />
      {children}
    </div>
  );
};