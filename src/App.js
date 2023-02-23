import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

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
      document.body.style.backgroundColor = 'rgb(33 34 36)';
      showAlert("Dark mode is set", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode is set", "success");
    }
  }
  return (
    <>
      <Navbar title="textUtils" aboutText="About textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />}/>
        <Route path='/about' element={<About mode={mode} showAlert={setAlert}/>} />
      </Routes>
    </>
  );
}

export default App;
