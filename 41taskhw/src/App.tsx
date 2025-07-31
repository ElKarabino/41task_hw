
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { ProductDescriptionPage } from './pages/ProductDescriptionPage/ProductDescriptionPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { ProtectedRoute } from './hoc/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/products' element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>} />
        <Route path='/products/:id' element={<ProductDescriptionPage />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
