import { memo, useCallback, useState } from 'react';
import { MenuButton } from '../MenuButton';
import './style.css';
import { MenuWindow } from '../MenuWindow';
import type { TYPES } from '../../types';
import type { ColorTheme } from '../../types';

interface Props {
  handleType: (type: TYPES) => void;
  handleColors: (color: ColorTheme) => void;
  handleSize: (size: number) => void;
  size: number;
  type: TYPES;
  colors: ColorTheme;
}

export const Menu: React.FC<Props> = memo(({handleType, handleColors, handleSize, size, type, colors}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { hand, watchBorder, background, clockBackground } = colors;
  
    const handleClick = (status: boolean) => {
      setIsOpen(status);
  };
  
  const updateColors = useCallback((p:ColorTheme) => {
    handleColors(p)
  },[])
  
  return (
    <div className="menu">
      <MenuButton onClick={handleClick} isOpen={isOpen} />
      <MenuWindow
        status={isOpen}
        handsColor={hand}
        watchBorderColor={watchBorder}
        backgroundColor={background}
        clockType={type}
        clockBackground={clockBackground}
        size={size}
        handleType={handleType}
        handleColors={updateColors}
        handleSize={handleSize}
      />
    </div>
  );
});



