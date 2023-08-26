import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MyApp() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    // if (cls === null) {
    //   if (mode === 'light') {
    //     setMode('dark');
    //     document.body.style.backgroundColor = '#12195c';
    //     showAlert('Dark mode enabled!!', 'success');
    //   } else {
    //     setMode('light');
    //     document.body.style.backgroundColor = 'white';
    //     showAlert('Light mode enabled!!', 'success');
    //   }
    // } else {
    document.body.classList.add('bg-' + cls);
    // }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to use TextUtils"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default MyApp;
