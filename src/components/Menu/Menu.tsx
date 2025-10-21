import { memo, useState } from 'react';
import { MenuButton } from '../MenuButton';
import './style.css';
import { MenuWindow } from '../MenuWindow';
import type { TYPES } from '../../App';

interface Props {
  handleType: (type:TYPES) => void;
  handleColors: (color:any) => void;
  type: TYPES;
  colors: object;
}

export const Menu: React.FC<Props> = memo(({handleType, handleColors, type}) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = (status: boolean) => {
      setIsOpen(status);
    };
  
  return (
    <div className="menu">
      <MenuButton onClick={handleClick} isOpen={isOpen} />
      <MenuWindow
        status={isOpen}
        handsColor={"#000000"}
        watchBorderColor={"#808080"}
        backgroundColor={"#ffffff"}
        clockType={type}
        clockBackground={'#ffffff'}
        handleType={handleType}
        handleColors={handleColors} />
    </div>
  );
});



