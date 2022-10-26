import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Error } from './Components/Error';
import About from './Pages/About';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='*' element={<Error/>}/>

      
    </Routes>

    

    </>

  );
}

export default App;
