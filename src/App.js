import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BestSellingPage,
  EventsPage,
  FAQPage,
  HomePage,
  LoginPage,
  ProductsPage,
  RegisterPage,
} from "./Routes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
