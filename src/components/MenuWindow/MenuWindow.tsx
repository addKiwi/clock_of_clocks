import { useState } from 'react';
import './style.css'
import cn from 'classnames';

interface Props {
  status: boolean;
  handsColor: string;
  watchBorderColor: string;
  backgroundColor: string;
  clockType: string;
}

export const MenuWindow: React.FC<Props> = ({status, handsColor, watchBorderColor, backgroundColor, clockType }) => {
  const [hands, setHands] = useState(handsColor);
  const [watchBorder, setWatchBorder] = useState(watchBorderColor);
  const [background, setBackground] = useState(backgroundColor);
  const [type, setType] = useState(clockType);
 

  return (
    <div className={cn("menu-window", {"open": status})}>
      <form action="" className="menu-form" >
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
          <div className="forrm-option">
            Type:
            <label>
              <input
                type="radio"
                name="type"
                value="horizontal"
                checked={type === "horizontal"}
                onChange={(e) => setType(e.target.value)}
              />
              Horizontal
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="vertical"
                checked={type === "vertical"}
                onChange={(e) => setType(e.target.value)}
              />
              Vertical
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};