
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      //showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

    return(
   <>
 <Navbar title="TextUtils"  about="About US" toggleMode={toggleMode} mode={mode}/>
 <div className="container my-3">
 <TextForm heading="Enter the text to Analyze"  mode={mode}/>
 </div>
</>
  );
}

export default App;
