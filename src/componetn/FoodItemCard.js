import { faDollar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";
const FoodItemCard = ({ foods }) => {
  const { addToCart, handleFoodDetails } = useContext(FoodContext);
  return (
    <>
      {foods.map((food, index) => (
        <div
          className="bg-white lg:h-[340px] h-[250px] w-auto rounded-lg relative drop-shadow-lg transition-all overflow-hidden group"
          key={index}
        >
          <Link onClick={() => handleFoodDetails(food)} to="/foodDetail" >
            <div className=" h-full">
              <div className="  lg:h-[55%] h-[55%] overflow-hidden">
                <img
                  src={food.image}
                  alt=""
                  className="h-full w-full object-cover duration-300 group-hover:scale-110"
                />
              </div>
              <div className="">
                <div className="lg:px-3 px-1 lg:text-lg text-sm font-bold lg:pt-3 pt-2 text-gray-800">
                  <h1 className=" lg:pb-1">{food.name}</h1>
                  <p className=" lg:text-sm text-xs font-normal text-gray-600">
                    Double Topping
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex justify-between absolute bottom-0 lg:h-[60px] h-auto w-full items-end">
            <div className="flex items-center lg:pl-3 pl-2 lg:pb-3 pb-2">
              <FontAwesomeIcon
                icon={faDollar}
                className="mr-1 text-[#FF9197]"
              />
              <p className="font-bold lg:text-2xl text-xl">{food.price}</p>
            </div>
            <button
              className="bg-[#FF9197] lg:w-[50px] w-[42px] h-[35px] lg:h-[40px] rounded-tl-2xl rounded-br-lg text-white lg:text-2xl drop-shadow-[0_5px_10px_rgba(255,145,151,0.50)]"
              onClick={() => addToCart(food)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className=" hover:scale-125 duration-300"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodItemCard;
