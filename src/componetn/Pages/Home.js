import FoodMenue from "../FoodMenu";
import MainSection from "../MainSection";
import MobileNav from "../MobileNav";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
const Home = ({ children }) => {
  return (
    <>
      <NavBar />

      <MainSection bgClasses={"bg-[#F0F0F0]"}>
        <SearchBar />
        <FoodMenue />
        {children}
      </MainSection>
      <MobileNav
        forMobile="sticky bottom-0 bg-[#2A2627] lg:hidden"
        ulClass="px-5 py-4 text-[#6D696E]"
      />
    </>
  );
};

export default Home;
