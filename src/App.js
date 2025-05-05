import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rents from './pages/Rents/Courses';
import About from './pages/About/About';
import Cells from './pages/Cells/Blog';
import Contact from './pages/Contact/Contact';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Rents />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Cells />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
