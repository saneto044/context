import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Home } from './pages/Home';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
