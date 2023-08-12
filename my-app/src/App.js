
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-dark')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success")
      // document.title = 'React - Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
      // document.title = 'React  - Light Mode'

    }
  }

  return (
    <>
      <Router>
        <Navbar title='My First App' aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />


        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write down the message " mode={mode} />} />


        </Routes>

      </Router>

    </>
  );
}

export default App;
