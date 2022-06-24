import { Routes, Route } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home'
import Techno from './pages/Technologie';


function App() {
  return (
    <Routes>
      <Route excat path='/' element={<Home/>}/>
      <Route excat path='/destination' element={<Destination/>}/>
      <Route excat path='/crew' element={<Crew/>}/>
      <Route excat path='/technology' element={<Techno/>}/>
    </Routes>
  );
}

export default App;
