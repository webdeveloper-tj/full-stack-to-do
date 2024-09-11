import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-custom-gradient h-20 flex items-center justify-around mt-10">
      <div className="flex gap-x-1 items-center justify-center text-white">
        <span className="">Black Code</span>
        <AiFillCopyrightCircle color="white" size={20} />
        <span>2024</span>
      </div>
    </div>
  );
};

export default Footer;
