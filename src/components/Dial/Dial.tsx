import type { ColorTheme } from '../../types';
import { Clock, type Hands } from '../Clock';
import './style.css';
import { digitRules } from '../../utils';
import { memo } from 'react';
interface Props {
  theme: ColorTheme;
  digit: number;
  size: number;
}

export const Dial: React.FC<Props> = memo(({ theme, digit, size }) => {
  
  const dialMap = new Array(24).fill(null)

  return (
    <div className="dial vertical">
      {dialMap.map((_, i) => (
        <Clock size={size} theme={theme} angles={getAngles(i, digit)} key={i} />
      ))}
    </div>
  );
});

const getAngles = (position: number, digit: number): Hands => {
  const rulePosition = digitRules[position as keyof typeof digitRules];

  if (typeof rulePosition !== 'object' || rulePosition === null) {
    return {
      handAngle1: 45,
      handAngle2: 45,
    };
  }
  
  for (const rule in rulePosition) {
    if (rulePosition[rule].time.includes(digit)) {
      return {
        handAngle1: rulePosition[rule].handAngle1,
        handAngle2: rulePosition[rule].handAngle2,
      }
    }
  }

  return {
    handAngle1: 45,
    handAngle2: 45,
  };
}