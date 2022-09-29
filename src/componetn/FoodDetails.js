import {
  faBagShopping,
  faClock,
  faDollar,
  faFire,
  faMinus,
  faPlus,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";

const FoodDetails = () => {
  const { foodDetails, addToCart } = useContext(FoodContext);
  return (
    <div className="bg-[#F0F0F0] lg:h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto ">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-12 lg:gap-10 lg:p-16 relative lg:h-auto h-[100vh] ">
          <div className="flex justify-center absolute lg:top-6 top-5 w-full ">
            <div className="w-[90%] flex justify-between lg:text-4xl text-2xl z-10">
              <Link
                to="/"
                className="lg:bg-transparent bg-white px-3 py-2 rounded-xl flex items-center"
              >
                <GiKnifeFork />
              </Link>
              <Link
                to="/"
                className="bg-white px-3 py-2 rounded-xl flex items-center"
              >
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className=" text-[#FF9197]"
                />
              </Link>
            </div>
          </div>

          <div className=" col-span-6 lg:block flex items-center lg:mt-5 h-[550px] rounded-md overflow-hidden">
            <img
              src={foodDetails.image}
              alt=""
              className="h-full w-full object-cover "
            />
          </div>

          <div className=" col-span-6 relative m-3 lg:mt-5">
            <div>
              <p className=" text-slate-400 text-sm">Pizza</p>
              <h1 className=" lg:font-semibold lg:text-3xl text-lg font-bold w-[60%] lg:w-full">
                Spicy Mix Sauspiry Pizza
              </h1>
              <p className="text-slate-600 lg:mt-3 lg:text-normal text-sm mt-1">
                Double Topping
              </p>
            </div>

            <div>
              <div className=" lg:flex lg:my-10 my-7">
                <div className="flex items-center lg:relative absolute top-7 right-0 lg:top-0">
                  <button className=" lg:w-[40px] w-[30px] h-[30px] lg:h-[35px] rounded-md text-white text-xl items-center bg-[#FF9197] hover:scale-110 duration-200">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <h2 className="lg:px-4 px-3 lg:text-3xl text-2xl font-semibold">
                    1
                  </h2>
                  <button className=" lg:w-[40px] w-[30px] h-[30px] lg:h-[35px] rounded-md text-white text-xl items-center bg-[#FF9197] hover:scale-110 duration-200">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <div className="flex items-center justify-between w-full lg:ml-10">
                  <button className=" lg:w-[100px] w-[90px] py-2 rounded-md hover:text-white font-semibold border-2 border-rose-200 hover:border-none text-md items-center hover:bg-[#FF9197] transition-all duration-200 hover:scale-95">
                    Small
                  </button>
                  <button className=" lg:w-[100px] w-[90px] py-2 rounded-md hover:text-white font-semibold border-2 border-rose-200 hover:border-none text-md items-center hover:bg-[#FF9197] transition-all duration-200 hover:scale-95">
                    Medium
                  </button>
                  <button className=" lg:w-[100px] w-[90px] py-2 rounded-md hover:text-white font-semibold border-2 border-rose-200 hover:border-none text-md items-center hover:bg-[#FF9197] transition-all duration-200 hover:scale-95">
                    Large
                  </button>
                </div>
              </div>

              <ul className="  lg:my-5 lg:w-4/6 flex justify-between items-center lg:text-md text-sm font-medium">
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-[gold] text-xl mr-1"
                  />
                  5.0
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faFire}
                    className=" text-orange-500 text-xl mr-1"
                  />
                  120 Kcal
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faClock}
                    className=" text-sky-500 text-xl mr-1"
                  />
                  10-12 Min
                </li>
              </ul>

              <div className=" pt-5 lg:pb-[100px]">
                <h2 className=" text-md mb-1 font-semibold">Description</h2>
                <p className=" text-justify text-md lg:text-normal lg:w-full">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The the readable content of a page when point of using Lorem
                  Ipsum is that it has a more-or-less normal
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute lg:bottom-16 lg:right-16 lg:w-[43%] w-full bottom-0">
            <Link
              to="/"
              className="bg-[#2A2627] w-full flex justify-between items-center lg:rounded-lg px-5 py-3"
              onClick={() => addToCart(foodDetails)}
            >
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faDollar}
                  className="mr-1 text-[#FF9197] text-sm"
                />
                <p className="font-semibold lg:text-2xl text-xl text-white">
                  8.05
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="mr-3 bg-[#FF9197] text-white px-2 py-2 rounded-md "
                />
                <p className="font-medium lg:text-sm text-sm text-white">
                  Add to card
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
