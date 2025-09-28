import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/profile" element={<h2>Profile</h2>} />
          <Route path="/user/settings" element={<h2>Settings</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
