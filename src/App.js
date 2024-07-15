// import logo from './logo.svg';     // We remove this import of logo as we are not using currently

import React, { useState } from 'react'

import './App.css';

// import About from './Components/About';

import Navbar from './Components/Navbar';

import TextForm from './Components/TextForm';

import Alert from './Components/Alert';


// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";  // This is old one & it is depricated

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';    // This is new one after deprication of above





function App() {

  const [mode, setMode] = useState('light');    // This is stating that default mode of the all is light

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type      // Here we can give same name also that's why we write type: type here
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Text_Utilities - Dark Mode"    // This will change the title of the we page Dynamically when Dark Mode enabled
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "Text_Utilities - Light Mode" // This will change the title of the we page Dynamically when light Mode enabled
    }

  }

  return (
    <>

      {/* ---------------- Code Without React Router starts from here for to deploy this app on GitHub ------------------- */}



      <Navbar titel="Text_Utilities" HomeTexts="Home" AboutTexts="About Us" mode={mode} toggleMode={toggleMode} />   {/* Her we passed props to the */}

      {/* <Navbar/>    */}
      {/* When we not pass any Props like above then the React app will take Default Propes from the Navbar.js component */}

      <Alert alert={alert} />

      <div className="container my-3">

        <TextForm showAlert={showAlert} heading="Enter the texts below to analyze" mode={mode} />

      </div>


      {/* ---------------- Code Without React Router Ends here for to deploy this app on GitHub ------------------- */}





      {/* ---------------- Code With React Router starts from here ------------------- */}


      {/* <Router> */}
        {/* <Navbar titel="Text_Utilities" HomeTexts="Home" AboutTexts="About Us" mode={mode} toggleMode={toggleMode} /> */}

        {/* <Alert alert={alert} /> */}

        {/* <div className="container my-3"> */}

          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the texts below to analyze" mode={mode} />} /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          {/* </Routes> */}
        {/* </div> */}
      {/* </Router > */}


      {/* ---------------- Code With React Router Ends here ------------------- */}


    </>
  );
}

export default App;





// Below code is the initial code when we copy it from the reference website - It is for example & nothing use of it

// let name = "Sanjay";    // This code is written by me    // This is also we removed as we are not using currently

/* -------------- Below entire code we cut from the above function App() as we start to write our own code --------------- */

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React With NBB
//       </a>
//     </header>
//   </div>
// );

/* ----------------------------------------------------------------------------------------------------------- */