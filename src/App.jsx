import { useState } from 'react';
import './App.css';
import About from './Components/About.jsx';
import Navbar from './Components/Navbar.jsx';
import TextForm from './Components/TextForm.jsx'


function App() {
  const[mode, setMode] = useState("light")

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');

    }
  }
  
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

    <About/>
    <div className={`text-${mode==='light'?'dark' : 'light'}`} style={{backgroundColor: mode==='light'?'white' : '#000025'}}>
    <TextForm heading="Enter the text to analyze" mode={mode} />
    </div>
    <footer className={`footer mt-auto  py-3 bg-${mode}`}>
        <div className="container">
          <span className={`text-${mode==='light'?'dark' : 'light'}`}>All Rights are Reserved. <a href="https://www.github.com/ahmadparizaad"> Ahmad Parizaad </a></span>
        </div>
      </footer>
    </>
  );
    }

export default App
