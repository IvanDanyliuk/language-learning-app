import Image from 'next/image';
import LogoImg from '../../public/logo.svg';

export const Logo: React.FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image src={LogoImg} alt='Logo'className='w-12 h-12' />
      <p className='font-bold text-2xl'>
        LangMate
      </p>
    </div>
  )
}