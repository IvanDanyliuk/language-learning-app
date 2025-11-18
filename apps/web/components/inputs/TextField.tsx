import { HTMLInputTypeAttribute } from 'react';
import { Input } from '../ui/input';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

interface ITextField {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  [x: string]: any;
};

export const TextField: React.FC<ITextField> = ({ 
  placeholder, 
  type, 
  error, 
  ...props 
}) => {
  return (
    <div>
      <Input 
        placeholder={placeholder} 
        type={type} 
        {...props} 
      />
      {error && (
        <p className='ml-2 mt-1 flex gap-1 items-center text-sm text-error'>
          <ExclamationCircleIcon className='w-5' />
          {error}
        </p>
      )}
    </div>
  );
};