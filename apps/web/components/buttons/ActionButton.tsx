import { Button } from '../ui/button';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

interface IActionButton {
  title: string;
  onClick?: () => void;
};

export const ActionButton: React.FC<IActionButton> = ({ 
  title, 
  onClick 
}) => {
  return (
    <Button 
      onClick={onClick}
      className='cursor-pointer w-full rounded-full border border-black bg-black hover:bg-accent text-white hover:text-black text-lg'
    >
      {title}
      <ArrowLongRightIcon className='size-8' />
    </Button>
  );
};