import React, { useState } from 'react'

import './App.css';

import Navbar from './Components/Navbar';

import TextForm from './Components/TextForm';

import Alert from './Components/Alert';



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(20 61 94)';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }

  return (

    <>

      <Navbar titel="Text_Utilities" HomeTexts="Home" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">

        <TextForm showAlert={showAlert} heading="Try Text_Utilities - Word Counter, Character Counter, Remove extra spaces, listen text" mode={mode} />

      </div>


    </>
  );
}

export default App;
