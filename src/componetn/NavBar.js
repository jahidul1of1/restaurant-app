import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import FoodContext from "../context/FoodContext";
import jhImg from ".//assets/jhimg.jpg";
import MainSection from "./MainSection";
import MobileNav from "./MobileNav";
import ShoppingBag from "./ShoppingBag";
const NavBar = () => {
  const { handleShowBag, showBag } = useContext(FoodContext);
  return (
    <MainSection bgClasses={` lg:bg-[#2A2627] bg-white sticky top-0 z-30 relative`}>
      <div className="py-2 lg:flex justify-between items-center ">
        <div className=" flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-1 ring-[#FF9197] mr-5">
            <img src={jhImg} alt="hello" />
          </div>
          <div>
            <p className="text-[#FF9197] text-[12px]">Welcome</p>
            <h2 className="lg:text-white font-semibold text-[20px]">
              Jahidul Islam
            </h2>
          </div>
          <FontAwesomeIcon
            icon={faBell}
            className="text-[#FF9197] text-2xl lg:ml-2 ml-auto"
          />
        </div>

        <MobileNav forMobile={"lg:block hidden"} />
        {showBag ? (
            <ShoppingBag handleShowBag={handleShowBag} />
        ) : null}
      </div>
    </MainSection>
  );
};

export default NavBar;
