import { useEffect, useState } from 'react'
import { Clock } from './components/Clock/Clock'
import type { ColorTheme } from './types'

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
    <Clock size={300} theme={theme} time={date}  />
  </div>)
}

export default App
