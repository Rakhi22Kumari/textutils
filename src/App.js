import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  // State
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not  
  const [alert, setAlert] = useState(null); // Alert state

  // Show alert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => { setAlert(null); }, 3000);
  };

  // Toggle mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333'; 
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Word Convertor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;
