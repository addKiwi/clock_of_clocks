import { memo, useState } from 'react';
import { MenuButton } from '../MenuButton';
import './style.css';
import { MenuWindow } from '../MenuWindow';

interface Props {

}

export const Menu: React.FC<Props> = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = (status: boolean) => {
      setIsOpen(status);
    };
  
  return (
    <div className='menu'>
      <MenuButton onClick={handleClick} />
      {isOpen && <MenuWindow status={isOpen} />}
    </div>
  );
});



