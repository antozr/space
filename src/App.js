import { Routes, Route } from 'react-router-dom';
import HeaderNav from './components/Header';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home'
import Techno from './pages/Technologie';
import './App.scss'

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <Routes>
        <Route excat path='/home' element={<Home />} />
        <Route excat path='/destination' element={<Destination />} />
        <Route excat path='/crew' element={<Crew />} />
        <Route excat path='/technology' element={<Techno />} />
      </Routes>
    </div>
  );
}

export default App;
