import { Routes, Route, Navigate } from 'react-router-dom';
import FreeProducts from '../views/FreeProducts'; 
import Contact from '../views/Contact'; 
// import NotFound from '../views/NotFound'; // 404 sayfası için eklediğiniz bileşen

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/free-products" element={<FreeProducts />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/404" element={<NotFound />} /> 404 sayfası */}
      {/* <Route path="*" element={<Navigate to="/404" />} /> Tanımlanmayan yollar için yönlendirme */}
    </Routes>
  );
};

export { AppRoutes };