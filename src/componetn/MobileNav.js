import {
  faBagShopping,
  faHome,
  faMapMarkerAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";

const MobileNav = ({ forMobile, ulClass }) => {
  const {
    cartItems,
    cartCounter,
    quanitiyIncrement,
    quantityDecrement,
    removeToCart,
    placeOrder,
    handleShowBag,
  } = useContext(FoodContext);

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

  return (
    <div className={`${forMobile}`}>
      <ul
        className={`lg:text-white lg:text-2xl flex justify-between lg:gap-6 lg:-mr-5 ${ulClass}`}
      >
        <li>
          <Link
            to="/"
            className="hover:text-[#FF9197] focus:text-[#FF9197] transition-all duration-500 px-4"
          >
            <FontAwesomeIcon icon={faHome} className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-[#FF9197] focus:text-[#FF9197] transition-all duration-500 px-4"
          >
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-[#FF9197] focus:text-[#FF9197] transition-all duration-500 px-4"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl" />
          </Link>
        </li>

        <li>
          {window.innerWidth > 500 ? (
            <button
              onClick={handleShowBag}
              className="px-5  flex justify-center space-x-1"
            >
              <p className=" text-lg text-[#FF9197] font-bold ">
                {cartCounter}
              </p>
              <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
            </button>
          ) : (
            <Link to="/cart" className="px-5  flex justify-center space-x-1">
              <p className=" text-lg text-[#FF9197] font-bold ">
                {cartCounter}
              </p>
              <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
