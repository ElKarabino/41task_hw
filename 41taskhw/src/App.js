
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
