import { useState } from 'react';
import './style.css'
import cn  from 'classnames';

interface Props {
  onClick: (active:boolean) => void;
}

export const MenuButton: React.FC<Props> = ({onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prev => !prev)
    onClick(isActive);
  }

  return (
    <div className={cn("menu-button", {"active":isActive})} onClick={handleClick}>
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </div>
  );
};