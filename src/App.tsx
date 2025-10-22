import { useEffect, useState } from 'react'
import { TYPES, type ColorTheme } from './types'
import { Dial } from './components/Dial';
import './App.css';
import { Menu } from './components/Menu';
import cn from 'classnames';
import { useDebounce } from './utils/debounce';

const DEFAULT_TIME = {
  t1: 0,
  t2: 0,
  t3: 0,
  t4: 0,
}

const DEFAULT_SIZE = 100;
        
const DEFAULT_COLOR_THEME:ColorTheme = {
  hand: "#000000",
  watchBorder: "#808080",
  background: "#ffffff",
  clockBackground: "rgba(0,0,0,0)",
};

function App() {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [colorTheme, setColorTheme] = useState<ColorTheme>(DEFAULT_COLOR_THEME);
  const [type, setType] = useState<TYPES>(TYPES.HORIZONTAL);
  const debouncedColorTheme = useDebounce(colorTheme, 300);
  const [size, setSize] = useState<number>(DEFAULT_SIZE);

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
        <Menu
          handleType={setType}
          handleColors={setColorTheme}
          handleSize={setSize}
          size={size}
          type={type}
          colors={debouncedColorTheme}

        />
      </div>
      <div
        className={cn("content", {
          horizontal: type === TYPES.HORIZONTAL,
          vertical: type === TYPES.VERTICAL,
        })}
      >
        <Dial theme={debouncedColorTheme} digit={time.t1} size={size} />
        <Dial theme={debouncedColorTheme} digit={time.t2} size={size} />
        <Dial theme={debouncedColorTheme} digit={time.t3} size={size} />
        <Dial theme={debouncedColorTheme} digit={time.t4} size={size} />
      </div>
    </div>
  );
}

export default App
