import { useState } from 'react';
import { MenuButton } from '../MenuButton';
import './style.css';
import { MenuWindow } from '../MenuWindow';

interface Props {

}

export const Menu: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = (status: boolean) => {
      setIsOpen(status);
    };
  
  return (
    <div className='menu'>
      <MenuButton onClick={handleClick} />
      <MenuWindow status={isOpen}/>
    </div>
  );
};



