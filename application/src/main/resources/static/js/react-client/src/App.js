import React, { createContext, useState } from 'react';

import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import ReactSwitch from 'react-switch'
import style from './style.module.scss';

export const ThemeContext = createContext(null);
function App() {
  const [ theme, setTheme ] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme} >
      <div className={theme==='dark' ? style.dark : style.light} >
        <BrowserRouter>
          <Header />
          <div className={style.App}>
          <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
            <AppRouter />
          </div>  
          <Footer />  
        </BrowserRouter>
      </div>
      </div>
    </ThemeContext.Provider>
   
  ); 
}
export default App;
