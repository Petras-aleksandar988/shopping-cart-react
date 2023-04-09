import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";
import { ShopProvider } from "./context/useContext";
import { PRODUCTS } from "./Products";


function App() {
  return (
    <div className="app">
      <ShopProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopProvider>
    </div>
  );
}

export default App;
