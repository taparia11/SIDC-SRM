import React from 'react'
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Ps from './Components/Ps';
import Dwps from './Components/Dwps';
import Ywps from './Components/Ywps';
import Gpl from './Components/Gpl';
import Message from './Components/Message';
import News from './Components/News';
import Uevents from './Components/Uevents';
import E2021 from './Components/E2021';
import E2022 from './Components/E2022';

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home titleChange='Home'/>} />
          <Route exact path='/About' element={<About titleChange='About Us'/>} />
          <Route exact path='/ps' element={<Ps titleChange='PATENT STATISTICS'/>} />
          <Route exact path='/dwps' element={<Dwps titleChange='DEPARTMENT WISE PATENT STATISTICS'/>} />
          <Route exact path='/ywps' element={<Ywps titleChange='YEAR WISE PATENT STATISTICS'/>} />
          <Route exact path='/gpl' element={<Gpl titleChange='GRANTED PATENTS LIST'/>} />
          <Route exact path='/message' element={<Message titleChange='Message' />} />
          <Route exact path='/events2021' element={<E2021 titleChange='EVENTS 2021' />} />
          <Route exact path='/events2022' element={<E2022 titleChange='EVENTS 2022' />} />
          <Route exact path='/upcomingevents' element={<Uevents titleChange='UPCOMING EVENTS' />} />
          <Route exact path='/news' element={<News titleChange='News' />} />
          <Route exact path='/contact' element={<Contact titleChange='Contact'/>} />
          
    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
