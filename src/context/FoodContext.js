import { createContext, useState } from "react";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  // Helper functions cart total items counter
  const incrementCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };
  const decrementCartCounter = () => {
    setCartCounter(cartCounter - 1);
  };

  // Add food in cart
  const addToCart = (food) => {
    incrementCartCounter();
    const checkingFoodIndex = cartItems.indexOf(food);

    if (checkingFoodIndex === -1) {
      setCartItems((prevState) => [food, ...prevState]);
    } else {
      cartItems[checkingFoodIndex].quantity.push(1);
      setCartItems((prevState) => [...prevState]);
    }
  };

  // Remove food in the cart
  const removeToCart = (food) => {
    decrementCartCounter();
    const filterCartItems = cartItems.filter((item) => item !== food);
    setCartItems(filterCartItems);
  };

  // increment the quantity of the item in the cart
  const quanitiyIncrement = (food) => {
    incrementCartCounter();
    const checkingFoodIndex = cartItems.indexOf(food);

    if (cartItems[checkingFoodIndex] === food) {
      cartItems[checkingFoodIndex].quantity.push(1);
      return setCartItems((prevState) => [...prevState]);
    }
  };

  // decrement the quantity of the item in the cart
  const quantityDecrement = (food) => {
    decrementCartCounter();
    const checkingFoodIndex = cartItems.indexOf(food);

    if (cartItems[checkingFoodIndex] === food) {
      cartItems[checkingFoodIndex].quantity.pop();
      setCartItems((prevState) => [...prevState]);
    }
  };

  // Shoing full detainls a food
  const [foodDetails, setFooddetails] = useState([]);
  const handleFoodDetails = (food) => {
    setFooddetails(food);
  };
  const [order, setOrder] = useState({});

  const [showBag, setShowBag] = useState();
  const handleShowBag = () => {
    setShowBag(!showBag);
  };

  /**
   * * order table
   * !params:  name, address, cart, total, customer_id, phone_no, comment
   * @param {string} name
   * @param {string} address
   * @param {json} cart => [{id:1,quantity:1},{id:2,quantity:2}...{id:n,quantity:n}]
   * @param {int} total
   * @param {int} customer_id
   * @param {string} phone_no
   * @param {string} comment
   */
  const placeOrder = (orderInfo) => {
    const { name, address, cart, customer_id, phone_no, comment } = orderInfo;

    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    fetch("http://localhost:5000/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        cart,
        total,
        customer_id,
        phone_no,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <FoodContext.Provider
      value={{
        cartItems,
        cartCounter,
        foodDetails,
        addToCart,
        removeToCart,
        quanitiyIncrement,
        quantityDecrement,
        handleFoodDetails,
        showBag,
        handleShowBag,
        placeOrder,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodContext;
