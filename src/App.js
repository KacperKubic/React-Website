import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Offer from './Components/Offer';
import OfferCategory from './Components/OfferCategories/OfferCategory';
import NotFound from './Components/NotFound';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Navbar/>
      {/* Animate Presence make the component to animate out when it's removed from the React tree */}
      <AnimatePresence exitBeforeEnter>
        {/*Routes to different components*/}
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home/>} />
          <Route path='/offer' element={<Offer/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/category/:category' element={<OfferCategory/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
