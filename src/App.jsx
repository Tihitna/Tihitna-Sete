import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Social from './components/social';
import Home from './pages/home';
import Projects from './pages/projects';
import Services from './pages/service';
import Contact from './pages/contact';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Social/>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/projects' element={ <Projects />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/contact' element={ <Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
