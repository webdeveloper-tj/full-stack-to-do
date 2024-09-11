import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineFileAdd, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
const UserNavBar = () => {
  const [settingsUser, setSettingsUser] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-gradient flex flex-col sm:flex-row justify-between px-2 py-1 mb-16 shadow-lg h-24">
      <div className="flex flex-col justify-around ">
        <h1 className="text-xl text-white self-start">Black Code</h1>
        <p className="hidden sm:block text-white  sleft-end">
          Will be the best IT company in the World
        </p>
      </div>
      <div className="flex items-center gap-x-3 sm:self-end">
        <Link
          to="/userprofile"
          className="flex items-center outline-none justify-center bg-red-200 sm:bg-red-200  gap-x-1  rounded-full px-2 h-8  mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          <AiOutlineHome size={20} /> <span>Home</span>
        </Link>
        <Link
          to="/userprofile/create"
          className="flex items-center outline-none justify-center bg-red-200 sm:bg-red-200 gap-x-1  rounded-full px-2 h-8  mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          <AiOutlineFileAdd size={20} />
          <span>New</span>
        </Link>
        <Link
          to="/userprofile/settingsuser"
          className="flex items-center outline-none justify-center bg-red-200 sm:bg-red-200  gap-x-1 rounded-full px-2 h-8  mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          <AiOutlineUser size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default UserNavBar;
