import FoodItemCard from "../FoodItemCard";
import { pizzaArr } from "./foodArrStore";
const Pizzas = () => {
  return (
    <div className="lg:py-10 py-5 grid lg:grid-cols-4 grid-cols-2 lg:gap-14 gap-y-16 lg:gap-y-20 gap-5">
      <FoodItemCard foods={pizzaArr} />
    </div>
  );
};

export default Pizzas;
