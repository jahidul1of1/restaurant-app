import {
  faAngleLeft,
  faMinus,
  faPlus,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  FaAngleDown,
  FaCreditCard,
  FaHeart,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaSearchLocation
} from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import FoodContext from "../../context/FoodContext";
import MainSection from "../MainSection";
import NavBar from "../NavBar";
const CheckOut = () => {
  const { cartItems, quanitiyIncrement, quantityDecrement, removeToCart } =
    useContext(FoodContext);
  return (
    <>
      <NavBar />
      <MainSection>
        <div className="grid grid-cols-12 my-5 bg-white gap-3">
          <div className=" col-span-8">
            <h2 className="font-bold text-4xl mb-5">Food Cart</h2>
            <div className="w-full flex justify-between items-center font-semibold text-sm pb-3 text-center border-b-2">
              <p className="w-[40%] text-left">Food</p>
              <p className="w-[20%]">Size</p>
              <p className="w-[20%]">Quantity</p>
              <p className="w-[20%]">Total Price</p>
            </div>
            <div className=" overflow-y-scroll h-[450px] shadow-inner mt-1 scrollNone">
              {cartItems.map((food, index) => (
                <div
                  className="bg-white w-full h-20 flex  rounded-lg mb-10 border overflow-hidden"
                  key={index}
                >
                  <div className="h-full overflow-hidden w-[16%]">
                    <img
                      src={food.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-2 text-sm font-semibold flex flex-col justify-between w-[24%]">
                    <h1>{food.name}</h1>
                    <p className=" font-normal text-xs flex items-center">
                      Somthing about this food
                    </p>
                  </div>

                  <div className="text-xs flex items-center w-[20%]">
                    <div className=" border px-4 h-8 rounded-3xl flex  items-center gap-1 m-auto">
                      <p>Regular</p>
                      <FaAngleDown />
                    </div>
                  </div>

                  <div className="w-[20%] flex items-center">
                    <div className=" flex gap-4 items-center  m-auto px-4 rounded-3xl border h-8">
                      <button
                        onClick={
                          food.quantity.length > 1
                            ? () => quantityDecrement(food)
                            : () => removeToCart(food)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p className="text-[#FF9197] font-semibold text-lg">
                        {food.quantity.length}
                      </p>
                      <button onClick={() => quanitiyIncrement(food)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>

                  <div className="w-[20%] flex items-center">
                    <div className=" flex gpa-2 items-center px-5 text-left ml-auto font-semibold">
                      <TbCurrencyTaka />
                      <p>{food.price}</p>
                      <button onClick={() => removeToCart(food)}>
                        <FontAwesomeIcon
                          icon={faXmark}
                          className=" ml-7 text-xl"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full flex justify-between border-t-2 pt-2">
              <div className="flex items-end">
                <button className="flex items-center gap-2 py-2 px-7 border border-[#FF9197] rounded-3xl bg-slate-900 text-base font-normal text-white hover:-translate-x-7 duration-300 ">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-[#FF9197]"
                  />
                  Continew Shopping
                </button>
              </div>
              <div className="w-[30%]">
                <div className="flex justify-between items-center text-right text-sm font-semibold">
                  <div className="text-right">
                    <p>Subtotal :</p>
                    <p>Delebary :</p>
                  </div>
                  <div className="text-gray-700">
                    <p className="flex items-center gap-1">
                      <TbCurrencyTaka />
                      20.00
                    </p>
                    <p className="flex items-center gap-1">
                      <TbCurrencyTaka />
                      00.00
                    </p>
                  </div>
                </div>
                <div className="flex justify-between font-bold border-t-2 pt-1 mt-1 text-right">
                  <p>Total Price :</p>
                  <p className="flex items-center gap-1">
                    <TbCurrencyTaka />
                    40.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-4">
            <div className=" bg-slate-900 text-white w-[95%] ml-auto h-full rounded-xl p-8 relative">
              <h1 className=" text-2xl font-semibold pb-1 border-b-2">
                Customer Info
              </h1>
              <div className=" mt-5 text-sm">
                <p>Payment methood</p>
                <div className=" flex justify-between items-center mt-2">
                  <button className="flex items-center gap-2 border-white border rounded-3xl px-7 py-2">
                    <FaCreditCard /> Online
                  </button>
                  <button className="flex items-center gap-2 border-white border rounded-3xl px-7 py-2">
                    <FaMoneyBillWave />
                    Cash On
                  </button>
                </div>
              </div>
              <div className="text-sm mt-7">
                <p>Adress</p>
                <div className="flex justify-between items-center text-2xl mb-5 mt-2">
                  <button>
                    <FaCreditCard />
                  </button>
                  <button>
                    <ImOffice />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <AiFillPlusCircle />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-10 border h-9 rounded-md w-full px-2">
                  <FaSearchLocation className=" text-lg " />
                  <input
                    type="text"
                    placeholder="Search Your Location or Mark in Map.."
                    className=" flex-1 border-none outline-none bg-transparent h-full px-2 text-sm"
                  />
                  <button className="text-xl">
                    <FaMapMarkedAlt />
                  </button>
                </div>
                <textarea
                  className="outline-none border bg-transparent rounded-md mt-3 w-full p-1"
                  placeholder="Typre somthing about this order or your address..."
                  id="txtid"
                  name="txtname"
                  rows="4"
                  maxlength="200"
                ></textarea>
              </div>
              <div className="flex items-center justify-between border h-9 rounded-md w-full pl-2 overflow-hidden mt-2 ">
                <input
                  type="text"
                  placeholder="Cupon.."
                  className=" flex-1 border-none outline-none bg-transparent h-full px-2 text-sm"
                />
                <button className=" bg-white text-black h-10 px-5">
                  Apply
                </button>
              </div>
              <div className="text-sm font-semibold">
                <div className="flex justify-between pt-1 mt-1 ">
                  <p>Discount :</p>
                  <p className="flex items-center gap-1">
                    <TbCurrencyTaka />
                    10.00
                  </p>
                </div>
                <div className="flex justify-between  pt-1 mt-1 ">
                  <p>Total Price :</p>
                  <p className="flex items-center gap-1">
                    <TbCurrencyTaka />
                    40.00
                  </p>
                </div>
              </div>
              <button className=" bg-sky-400 w-[92%] py-3 rounded-3xl absolute bottom-6 left-4">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
};

export default CheckOut;
