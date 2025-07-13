import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card';
import { ThemeProvider } from './contexts/theme';

function App() {
  const[themeMode, setthemeMode] = useState('light')

  const darktheme = ()=>{
    setthemeMode('dark')
  }
   const Lighttheme = () => {
     setthemeMode("light");
   };
    useEffect(() => {
      document.querySelector("html").classList.remove("dark", "light");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

  return (
    <ThemeProvider value= {{themeMode, darktheme, Lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
