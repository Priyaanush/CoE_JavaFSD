import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
