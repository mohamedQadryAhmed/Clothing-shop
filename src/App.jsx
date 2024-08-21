import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"


function App() {
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/place-order" element={<PlaceOrder />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/product/:productId" element={<Product />}/>

      </Routes>
      
    </div>
  )
}

export default App
