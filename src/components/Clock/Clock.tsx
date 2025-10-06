import { useMemo } from "react";
import type { ColorTheme } from "../../types";
import './style.css';

export interface Hands {
  handAngle1: number;
  handAngle2: number;
}

interface Props {
  angles: Hands;
  size: number;
  theme: ColorTheme;
}

export const Clock: React.FC<Props> = ({ angles, size, theme }) => {
  const { base, hand } = theme;
  const { handAngle1, handAngle2 } = angles;

  const handStyle = useMemo(
    () => ({
      width: `${size / 20}px`,
      height: `${size / 2}px`,
      borderRadius: `${size / 30}px`,
      transformOrigin: `${size / 40}px ${size / 40}px`,
      backgroundColor: `${hand}`,
    }),
    [size]
  );

  const firstHand = useMemo(
    () => ({
      transform: `translate(-${size / 40}px, -${
        size / 40
      }px) rotate(${handAngle1 - 180}deg)`,
      ...handStyle,
    }),
    [size, handAngle1, handStyle]
  );

  const secondHand = useMemo(
    () => ({
      transform: `translate(-${size / 40}px, -${
        size / 40
      }px) rotate(${handAngle2 - 180}deg)`,
      ...handStyle,
    }),
    [size, handAngle2, handStyle]
  );

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, background: `${base}` }}
      className="clock"
    >
      <div className="first" style={firstHand}></div>
      <div className="second" style={secondHand}></div>
    </div>
  );
};
