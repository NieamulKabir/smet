import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
         
      <BrowserRouter>
        <Navbar />
        <Routes>
       
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/contact' element={<Contact />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    
    </div>
  );
}

export default App;
