import {
  faBagShopping,
  faDollar,
  faEquals,
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FoodContext from "../context/FoodContext";

const ShoppingBag = ({ handleShowBag }) => {
  const {
    cartItems,
    quanitiyIncrement,
    quantityDecrement,
    cartCounter,
    removeToCart,
  } = useContext(FoodContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity.length,
                0
              )
  return (
    <div className=" absolute top-0 right-0 h-[100vh] bg-white lg:w-[450px] w-full duration-500 transition-all overflow-y-auto drop-shadow-lg z-50 scrollNone">
      <div className="flex justify-between lg:text-2xl text-2xl bg-[#2A2627]  sticky top-0 z-10">
        <button
          onClick={pathname === "/cart" ? () => navigate("/") : handleShowBag}
          className="flex items-center text-[#FF9197] py-5 px-5"
        >
          <GiKnifeFork />
        </button>

        <button className="flex items-center  group pr-5 gap-x-1 text-[#FF9197]">
          <p className=" text-lg text-white font-bold ">{cartCounter}</p>
          <FontAwesomeIcon icon={faBagShopping} onClick={handleShowBag} />
        </button>
      </div>

      <div className=" p-5 ">
        {cartItems.map((food, index) => (
          <div
            className="bg-white h-[100px] w-full flex rounded-lg drop-shadow-lg mb-10 border border-rose-100 overflow-hidden"
            key={index}
          >
            <div className="h-full bg-orange-400 overflow-hidden w-[30%]">
              <img
                src={food.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-2 text-sm font-bold flex flex-col justify-between w-[55%]">
              <h1>
                {food.name}
                {food.id}
              </h1>

              <p className="font-bold lg:text-2xl text-xl flex items-center">
                <FontAwesomeIcon
                  icon={faDollar}
                  className="mr-1 text-sm text-[#FF9197]"
                />
                {food.price}
              </p>
            </div>

            <div className="h-full ml-auto w-[12%] text-xl justify-between flex flex-col bg-[#2A2627] text-white ">
              <button
                onClick={
                  food.quantity.length > 1
                    ? () => quantityDecrement(food)
                    : () => removeToCart(food)
                }
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  className=" hover:scale-90 duration-300"
                />
              </button>
              <p className="font-bold text-md mx-auto text-[#FF9197]">
                {food.quantity.length}
              </p>
              <button onClick={() => quanitiyIncrement(food)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className=" hover:scale-90 duration-300 mb-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Place order button */}
      <div className=" sticky bottom-0 w-full mt-auto">
        <Link
          to="/checkout"
          className="bg-[#2A2627] w-full flex justify-center items-center lg:rounded-lg px-5 py-3"
        >
          <div className="flex items-center text-white">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="mr-3 bg-[#FF9197] px-2 py-2 rounded-md "
            />
            <p className="font-medium lg:text-base text-sm ">Check Out </p>
            <FontAwesomeIcon
              icon={faEquals}
              className="ml-1 text-md text-[#FF9197]"
            />
            <FontAwesomeIcon
              icon={faDollar}
              className="m-1 text-md "
            />
            <p className="font-medium lg:text-lg  text-sm ">
              {totalAmount.toFixed(2)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBag;
