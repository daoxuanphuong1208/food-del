import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<PlaceOrder />} path="/order" />
      </Routes>
    </div>
  );
}

export default App;
