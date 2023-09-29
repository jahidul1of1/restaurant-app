import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div>
      <form className="flex justify-center lg:pt-14 pt-7 lg:pb-10 pb-5 drop-shadow-md">
        <div className="lg:w-[50%] w-full rounded-md bg-white flex justify-between items-center py-3">
          <FontAwesomeIcon
            icon={faSearch}
            className=" text-gray-500 text-xl px-3"
          />
          <input
            type="text"
            className=" w-full outline-none border-none "
            placeholder="pizza, burgar, noodlse, drinks..."
          />
          <FontAwesomeIcon
            icon={faSliders}
            className=" text-gray-500 text-xl px-3"
          />
          
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
