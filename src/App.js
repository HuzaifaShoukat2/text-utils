
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavbarProps from './Components/NavbarProps';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=> {
setAlert({
  msg:message,
  type: type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
  }
 const  toggleMode = ()=>{
    if(mode === 'light'){
      setmode ('dark')     
        document.body.style.backgroundColor='black'
        showAlert("Dark mode has been enabled", "success");
        // setInterval(() => {
        //   document.title="Huzaifa Shoukat!"
        // }, 2000);
      }
      else{
        setmode ('light')
        document.body.style.backgroundColor='white'    
        showAlert("Light mode has been enabled", "success");
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <NavbarProps name='Shoukat' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div> </>
    },
    {
      path: "/about",
      element:<> <NavbarProps name='Shoukat' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <About mode={mode}/>
      </div></>,
    },
  ]);


  return (
    <>
   
<RouterProvider router={router} />
    
    </>
  );
}

export default App;
