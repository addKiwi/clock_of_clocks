import { useEffect, useState } from 'react'
import { TYPES } from './types'
import { Dial } from './components/Dial';
import './App.css';
import { Menu } from './components/Menu';
import cn from 'classnames';
import { useAppSelector } from './utils/hooks';

const DEFAULT_TIME = {
  t1: 0,
  t2: 0,
  t3: 0,
  t4: 0,
}

function App() {
  const [time, setTime] = useState(DEFAULT_TIME);
  const { type } = useAppSelector((state) => state.clockDimensions);

  useEffect(() => {
    const t = setInterval(() => {
      const date = new Date();

      setTime({
        t1: Math.floor(date.getHours() / 10),
        t2: date.getHours() % 10,
        t3: Math.floor(date.getMinutes() / 10),
        t4: date.getMinutes() % 10,
      });
    }, 1000); 

    return () => clearInterval(t);
  }, [])
      
  return (
    <div className="app">
      <div className="app-menu">
        <Menu/>
      </div>
      <div
        className={cn("content", {
          horizontal: type === TYPES.HORIZONTAL,
          vertical: type === TYPES.VERTICAL,
        })}
      >
        <Dial digit={time.t1} />
        <Dial digit={time.t2} />
        <Dial digit={time.t3} />
        <Dial digit={time.t4} />
      </div>
    </div>
  );
}

export default App
