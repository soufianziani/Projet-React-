import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Contact from './components/Contact';
import {Routes,Route} from "react-router-dom";
import Homme from './components/Homme';
import Login from './components/Login';
import Regitser from './components/Regitser';
import About from './components/Aboute';
import Footer from './components/Footer';

function App() {
  return (
  <>
   <Header />
   <Routes>
   <Route path='/' element={<Homme />} exact />
     <Route path='/products' element={<Cards />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Regitser/>} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/About' element={<About />} />
   </Routes>

   <Footer />
  </>
  );
}

export default App;
