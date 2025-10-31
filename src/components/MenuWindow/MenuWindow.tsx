import "./style.css";
import cn from "classnames";
import { TYPES, type Color} from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  updateBackground,
  updateClockBackground,
  updateHand,
  updateWatchBorder,
} from "../../state/colorThemeSlice";
import { useDebouncedCallback } from "use-debounce";
import { updateSize, updateType } from "../../state/clockDimensionsSlice";
import { useEffect, useState } from "react";

interface Props {
  status: boolean;
}

const TRANSPARENT_COLOR = 'rgba(0,0,0,0)';

export const MenuWindow: React.FC<Props> = ({status}) => {
  const { clockBackground, hand, watchBorder, background } = useAppSelector(
    (state) => state.colorTheme
  );
  const { type, size } = useAppSelector((state) => state.clockDimensions);
  const dispatch = useAppDispatch();
  const [isCheked, setIsChecked] = useState(true);
  const [dialBackground, setDialBackground] = useState(clockBackground);
  const debouncedOnChangeHand = useDebouncedCallback((value) => {
    dispatch(updateHand(value as Color));
  }, 300);
  const debouncedOnChangeWatchBorder = useDebouncedCallback((value) => {
    dispatch(updateWatchBorder(value as Color));
  }, 300);
  const debouncedOnChangeBackground = useDebouncedCallback((value) => {
    dispatch(updateBackground(value as Color));
  }, 300);
  const debouncedOnChangeClockBackground = useDebouncedCallback((value) => {
    dispatch(updateClockBackground(value as Color));
  }, 300);

  useEffect(() => {
    if (isCheked) {
      debouncedOnChangeClockBackground(TRANSPARENT_COLOR);
    }
  }, [isCheked]);

  useEffect(() => {
    if (dialBackground === TRANSPARENT_COLOR) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
      debouncedOnChangeClockBackground(dialBackground);
    }
  },[dialBackground])

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  };

  return (
    <div className={cn("menu-window", { open: status })}>
      <form action="" className="menu-form">
        <div className="form-option">
          <label>
            <input
              type="color"
              value={hand}
              name="handsColor"
              onChange={(e) => {
                debouncedOnChangeHand(e.target.value);
              }}
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
              onChange={(e) => {
                debouncedOnChangeWatchBorder(e.target.value);
              }}
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
              onChange={(e) => {
                debouncedOnChangeBackground(e.target.value);
              }}
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
              onChange={(e) => {
                setDialBackground(e.target.value as Color);
              }}
            />
            Dial background color
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="checkbox"
              name="transparentDialBackground"
              onChange={(e) => handleCheckboxChange(e)}
              checked={isCheked} 
            />
            Transparent dial
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="number"
              name="size"
              value={size}
              onChange={(e) => dispatch(updateSize(+e.target.value))}
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
              onChange={() => dispatch(updateType(TYPES.HORIZONTAL))}
            />
            Horizontal
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="vertical"
              checked={type === "vertical"}
              onChange={() => dispatch(updateType(TYPES.VERTICAL))}
            />
            Vertical
          </label>
        </div>
      </form>
    </div>
  );
};
