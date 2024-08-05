import{NavLink,}  from "react-router-dom";
const Header = () => {
  return (
    <div className=" text-whiteh-[50px] w-full justify-center items-center gap-3 flex p-3">
      <h5>
        <NavLink
          to={"/"}
          className={({isActive})=> ` rounded-sm p-2 ${isActive?'bg-orange-400':'bg-transparent'}`} > Home
        </NavLink>
      </h5>
      <h5>
        <NavLink
          to={"/about"}
          className={({isActive})=> ` rounded-sm p-2 ${isActive?'bg-orange-400':'bg-transparent'}`} > 
        About
          
        </NavLink>
      </h5>
      <h5>
        <NavLink
          to={"/contact"}
          className={({isActive})=> ` rounded-sm p-2 ${isActive?'bg-orange-400':'bg-transparent'}`}
        >
          Contact us
        </NavLink>
      </h5>
    </div>
  );
};

export default Header;
