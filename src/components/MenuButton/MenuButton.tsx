import { useEffect, useState } from 'react';
import './style.css'
import cn  from 'classnames';

interface Props {
  onClick: (active: boolean) => void;
  isOpen: boolean;
}

export const MenuButton: React.FC<Props> = ({isOpen, onClick}) => {
  const [isActive, setIsActive] = useState(isOpen);

  useEffect(() => {
    onClick(isActive)
  },[isActive])

  return (
    <div
      className={cn("menu-button", { active: isActive })}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </div>
  );
};