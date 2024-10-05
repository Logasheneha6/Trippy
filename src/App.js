import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
