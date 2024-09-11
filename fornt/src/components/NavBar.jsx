import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-gradient flex flex-col sm:flex-row justify-between px-2 py-1 mb-16 shadow-lg h-20">
      <div className="flex flex-col justify-around ">
        <h1 className="text-xl text-white self-start">Black Code</h1>
        <p className="hidden sm:block text-white  sleft-end">
          Will be the best IT company in the World
        </p>
      </div>
      <div className="flex items-center gap-x-3 sm:self-end">
        <Link
          to="/"
          className="block bg-red-200 sm:bg-red-200 sm:px-3 sm:py-1 rounded-sm px-2 mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          Home
        </Link>
        <Link
          to="/singup"
          className="block bg-red-200 sm:bg-red-200 sm:px-3 sm:py-1 rounded-sm px-2 mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="block bg-red-200 sm:bg-red-200 sm:px-3 sm:py-1 rounded-sm px-2 mt-4 md:mt-0 text-white hover:shadow-xl hover:shadow-red-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
