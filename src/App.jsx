import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';


function App() {
  return (
  
     <Router>
       <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/> 
        <Route path='/register' Component={Register}/>
      </Routes>

     </Router>
   
  );
}

export default App;
