import { Clock, type Hands } from '../Clock';
import './style.css';
import { digitRules } from '../../utils/digitRules';
import { memo } from 'react';
import { useAppSelector } from '../../utils/hooks';

interface Props {
  digit: number;
}

export const Dial: React.FC<Props> = memo(({ digit }) => {
  const theme = useAppSelector((state) => state.colorTheme);
  const { size } = useAppSelector((state) => state.clockDimensions);
  const { background } = theme;
  const dialMap = new Array(24).fill(null)

  return (
    <div className="dial vertical" style={{backgroundColor: `${background}`}}>
      {dialMap.map((_, i) => (
        <Clock theme={theme} size={size} angles={getAngles(i, digit)} key={i} />
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