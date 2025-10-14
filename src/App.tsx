import { useEffect, useState } from 'react'
import type { ColorTheme } from './types'
import { Dial } from './components/Dial';
import './App.css';
import { Menu } from './components/Menu';

const theme: ColorTheme = {
  base: "rgba(0,0,0,0)",
  hand: "#000",
};

const DEFAULT_TIME = {
  t1: 0,
  t2: 0,
  t3: 0,
  t4: 0,
}

const SIZE = 100;


function App() {
  const [time, setTime] = useState(DEFAULT_TIME); 

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
        <Menu />
      </div>
      <div className="content horizontal">
        <Dial theme={theme} digit={time.t1} size={SIZE} />
        <Dial theme={theme} digit={time.t2} size={SIZE} />
        <Dial theme={theme} digit={time.t3} size={SIZE} />
        <Dial theme={theme} digit={time.t4} size={SIZE} />
      </div>
    </div>
  );
}

export default App
