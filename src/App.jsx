import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import JoinUs from './pages/JoinUs'
import SecondaryFooter from './components/SecondaryFooter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/join' element={<JoinUs/>} />
      </Routes>
      <SecondaryFooter/>
      <Footer/>
    </Router>
  )
}

export default App
