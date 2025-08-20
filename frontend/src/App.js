import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import StockPage from './pages/StockPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage/> }></Route>
        <Route path="/stockpage/:stock" element={<StockPage/> }></Route>

      </Routes>
    </Router>
  );
}

export default App;
