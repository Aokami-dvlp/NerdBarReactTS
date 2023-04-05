import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCocktail from './components/Navbar';
import FiltroCategoria from './pages/FiltroCategoria';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FiltroBicchiere from './pages/FiltroBicchiere';
import FiltroIngrediente from './pages/FiltroIngrediente';
import DrinkCart from './pages/DrinkCart';



function App() {
  
  return (
   <>
  <BrowserRouter>
   <NavbarCocktail/>
  <main>
    <Routes>
      <Route path='/' element={<FiltroCategoria/>}/>
      <Route path='/filtroCategoria' element={<FiltroCategoria/>}/>
      <Route path='/filtroBicchiere' element={<FiltroBicchiere/>}/>
      <Route path='/filtroIngrediente' element={<FiltroIngrediente/>}/>
    </Routes>

    <DrinkCart/>
  </main>
   </BrowserRouter>
   </>
  )
}

export default App
