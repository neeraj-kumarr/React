
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'



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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }




  return (
    <>
      <Navbar title='My First App' aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container">
        <TextForm showAlert={showAlert} heading="Write down the message " mode={mode} />
      </div>

      {/* <div className="container">
        <About />
      </div> */}


    </>
  );
}

export default App;
