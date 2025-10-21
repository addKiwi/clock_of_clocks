import { useEffect, useState } from 'react';
import './style.css'
import cn from 'classnames';
import { TYPES } from '../../App';

interface Props {
  status: boolean;
  handsColor: string;
  watchBorderColor: string;
  backgroundColor: string;
  clockType: TYPES;
  clockBackground: string;
  handleType: (type:TYPES) => void;
  handleColors: (color:object) => void;
}

export const MenuWindow: React.FC<Props> = ({status, handsColor, watchBorderColor, backgroundColor, clockType, clockBackground, handleType }) => {
  const [hands, setHands] = useState(handsColor);
  const [watchBorder, setWatchBorder] = useState(watchBorderColor);
  const [background, setBackground] = useState(backgroundColor);
  const [type, setType] = useState<TYPES>(clockType);
  const [dialBackground, setDialBackground] = useState(clockBackground);
 
  useEffect(() => {
    handleType(type); 
  },[type])

  return (
    <div className={cn("menu-window", { open: status })}>
      <form action="" className="menu-form">
        <div className="form-option">
          <label>
            <input
              type="color"
              value={hands}
              name="handsColor"
              onChange={(e) => setHands(e.target.value)}
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
              onChange={(e) => setWatchBorder(e.target.value)}
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
              onChange={(e) => setBackground(e.target.value)}
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
              onChange={(e) => setDialBackground(e.target.value)}
            />
            Dial background color
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