import logo from './logo.svg';
import './App.css';
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/ProductsPage' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
