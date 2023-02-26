import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
