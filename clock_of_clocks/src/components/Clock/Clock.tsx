import { useMemo } from "react";
import type { ColorTheme } from "../../types";
import './style.css';


interface Props {
  time: Date;
  size: number;
  theme: ColorTheme;
}

export const Clock = ({ time, size, theme }: Props) => {
  const { base, hand } = theme;

  const handStyle = useMemo(() => ({
    width: `${size / 20}px`,
    height: `${size / 2}px`,
    borderRadius: `${size / 30}px`,
    transformOrigin: `${size / 40}px ${size / 40}px`,
    backgroundColor: `${hand}`,
  }),[size]);

  const hourHand = useMemo(
    () => ({
      transform: `translate(-${size / 40}px, -${
        size / 40
        }px) rotate(${getAngleHours(time)}deg)`,
      ...handStyle,
    }),
    [size, time, handStyle]
  );

  const minuteHand = useMemo(
    () => ({
      transform: `translate(-${size / 40}px, -${
        size / 40
        }px) rotate(${getAngleMinutes(time)}deg)`,
      ...handStyle,
    }),
    [size, time, handStyle]
  );

  return (
    <div style={{ width: `${size}px`, height: `${size}px`, background: `${base}` }} className="clock">
      <div className="hour" style={hourHand}></div>
      <div className="minute" style={minuteHand}></div>
    </div>
  )
};

const getAngleHours = (date:Date):number => {
  const hours = date.getHours() % 12 || 12;
  return hours * 30 + 180;
}

const getAngleMinutes = (date: Date):number => {
  return date.getMinutes() * 6 + 180;
}

