import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFom from './Components/TextFom';
import React, {useState} from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <About/>,
  //   },
  // ]);
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert =(message,type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {setalert(null)},2000)  
  }
  const togglemode = ()=>{
    if (mode === 'light') {     
      setmode('dark');
      document.body.style.backgroundColor = '#2B3030';
      showalert("Dark Mode Enables","success ");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enables","success ");

    }
  } 
  return (
  <>
  <Router>
    <Navbar mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={<TextFom showalert={showalert} heading="Enter The Text To Analyze" mode={mode}/> } />
          <Route path="/about" element={<About mode={mode} />} />         
    </Routes>
    </div>
    </Router>
    {/* <RouterProvider router={router}/> */}
  </>
  );
}

export default App;
