import { Route, Routes } from "react-router-dom";
import "./App.css";
import FoodDetails from "./componetn/FoodDetails";
import Burgar from "./componetn/Pages/Burgar";
import Cart from "./componetn/Pages/Cart";
import Drink from "./componetn/Pages/Drink";
import Home from "./componetn/Pages/Home";
import Orders from "./componetn/Pages/Orders";
import Pizzas from "./componetn/Pages/Pizzas";
import Thai from "./componetn/Pages/Thai";
function App() {
  return (
    <div className="App">
      {/* <AnimatePresence exitBeforeEnter></AnimatePresence> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Burgar />
              <Pizzas />
              <Drink />
            </Home>
          }
        />
        <Route
          path="/pizza"
          element={
            <Home>
              <Pizzas />
            </Home>
          }
        />
        <Route
          path="/orders"
          element={
            <Home>
              <Orders />
            </Home>
          }
        />
        <Route
          path="/burgar"
          element={
            <Home>
              <Burgar />
            </Home>
          }
        />
        <Route
          path="/thai"
          element={
            <Home>
              <Thai />
            </Home>
          }
        />
        <Route
          path="/drink"
          element={
            <Home>
              <Drink />
            </Home>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foodDetail" element={<FoodDetails />} />
      </Routes>
    </div>
  );
}

export default App;
