
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Product/Products';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
