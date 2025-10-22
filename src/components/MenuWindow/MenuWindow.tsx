import { useEffect, useState } from 'react';
import './style.css'
import cn from 'classnames';
import { TYPES, type Color, type ColorTheme } from '../../types';

interface Props {
  status: boolean;
  handsColor: Color;
  watchBorderColor: Color;
  backgroundColor: Color;
  clockType: TYPES;
  clockBackground: Color;
  handleType: (type:TYPES) => void;
  handleColors: (color: ColorTheme) => void;
  handleSize: (size: number) => void;
  size: number;
}

export const MenuWindow: React.FC<Props> = ({status, handsColor, watchBorderColor, backgroundColor, clockType, clockBackground, handleType, handleColors, handleSize, size }) => {
  const [hands, setHands] = useState(handsColor); 
  const [watchBorder, setWatchBorder] = useState(watchBorderColor);
  const [background, setBackground] = useState(backgroundColor);
  const [type, setType] = useState<TYPES>(clockType);
  const [dialBackground, setDialBackground] = useState(clockBackground);
  const [clockSize, setClockSize] = useState(size);
 
  useEffect(() => {
    handleType(type); 
  }, [type])

  useEffect(() => {
    handleSize(clockSize);
  }, [clockSize]);
  
  useEffect(() => {
    handleColors({
      hand: hands,
      watchBorder: watchBorder,
      background: background,
      clockBackground: dialBackground,
    });
  },[hands, watchBorder, background, dialBackground])

  return (
    <div className={cn("menu-window", { open: status })}>
      <form action="" className="menu-form">
        <div className="form-option">
          <label>
            <input
              type="color"
              value={hands}
              name="handsColor"
              onChange={(e) => setHands(e.target.value as Color)}
            />
            Hands color
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="color"
              value={watchBorder}
              name="watchBorderColor"
              onChange={(e) => setWatchBorder(e.target.value as Color)}
            />
            Little watch border color
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="color"
              value={background}
              name="backgroundColor"
              onChange={(e) => setBackground(e.target.value as Color)}
            />
            Background color
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="color"
              value={dialBackground}
              name="dialBackground"
              onChange={(e) => setDialBackground(e.target.value as Color)}
            />
            Dial background color
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="number"
              name="size"
              value={size}
              onChange={(e)=> setClockSize(+e.target.value)}
            />
          </label>
        </div>
        <div className="form-option">
          Type:
          <label>
            <input
              type="radio"
              name="type"
              value="horizontal"
              checked={type === "horizontal"}
              onChange={() => setType(TYPES.HORIZONTAL)}
            />
            Horizontal
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="vertical"
              checked={type === "vertical"}
              onChange={() => setType(TYPES.VERTICAL)}
            />
            Vertical
          </label>
        </div>
      </form>
    </div>
  );
};