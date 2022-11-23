import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Error } from './Components/Error';
import About from './Pages/About';
import DeveloperAbout from './Pages/DeveloperAbout';
import Floods from './Pages/Floods';
import SingleFlood from './Components/SingleFlood';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/aboutdescription' element={<DeveloperAbout/>}/>
      <Route path='/floods' element={<Floods/>}/>
      <Route path='singleflood/:id' element={<SingleFlood/>}/>


      <Route path='*' element={<Error/>}/>

      
    </Routes>

    

    </>

  );
}

export default App;
