import { faBurger, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { GiNoodles, GiWaterBottle } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const FoodMenu = () => {
  const itemsNumver = window.innerWidth < 450 ? 3 : 5;
  const foodMenu = [
    {
      active: false,
      toUrl: "/",
      name: "All",
      icon: <IoGrid className=" text-xl mr-2" />,
    },
    {
      active: false,
      toUrl: "/pizza",
      name: "Pizza",
      icon: <FontAwesomeIcon icon={faPizzaSlice} className=" text-xl mr-2" />,
    },
    {
      active: false,
      toUrl: "/burgar",
      name: "Burgar",
      icon: <FontAwesomeIcon icon={faBurger} className=" text-xl mr-2" />,
    },
    {
      active: true,
      toUrl: "/thai",
      name: "Thai",
      icon: <GiNoodles className=" text-2xl mr-2" />,
    },
    {
      active: false,
      toUrl: "/drink",
      name: "Drinks",
      icon: <GiWaterBottle className=" text-2xl mr-2" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className=" max-w-3xl mx-auto pb-10 overflow-hidden">
      <Splide
        options={{
          drag: "free",
          arrows: false,
          perPage: itemsNumver,
          pagination: false,
          gap: "4rem",
        }}
      >
        {foodMenu.map((menu, index) => (
          <SplideSlide key={index}>
            <Link
              to={menu.toUrl}
              className={`drop-shadow-md flex items-center bg-white w-[100px] justify-center transition duration-300  py-2 font-semibold rounded-md hover:bg-[#FF9197] hover:text-white ${
                menu.toUrl === pathname ? "bg-[#FF9197] text-white " : ""
              }`}
            >
              {menu.icon}
              {menu.name}
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default FoodMenu;
