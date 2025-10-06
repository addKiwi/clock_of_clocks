import { useEffect, useState } from 'react'
import { Clock } from './components//Clock'
import type { ColorTheme } from './types'
import { Dial } from './components/Dial';

const theme: ColorTheme = {
  base: "#3F5EFB",
  hand: "#fff",
};



function App() {
  const [date, setDate] = useState<Date>(()=> new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setDate(new Date)
    }, 60000);

    return clearInterval(t);
  },[])

  return (<div className='app'>
    <Dial theme={theme} digit={0} />
  </div>)
}

export default App
