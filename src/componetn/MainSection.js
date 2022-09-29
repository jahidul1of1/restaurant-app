const MainSection = ({ children, bgClasses }) => {
  return (
    <div className={` ${bgClasses}`}>
      <div className="max-w-7xl mx-auto px-5">
        {children}
      </div>
    </div>
  );
};

export default MainSection;
