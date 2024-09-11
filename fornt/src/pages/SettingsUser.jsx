import React from "react";
import { AiOutlineLogout, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import UserNavBar from "../components/UserNavBar";

const SettingsUser = () => {
  return (
    <div className="">
      <UserNavBar />

      <div className="w-64 sm:w-72 lg:w-96 border-2 border-red-200 mx-auto bg flex flex-col rounded-md px-1 sm:px-3 py-2 gap-y-3">
        <h1 className="text-2xl text-white text-center mb-2">Settings</h1>
        <div className="text-white flex items-center  gap-x-2">
          <AiOutlineUser size={20} color="white" />
          <h1 className="text-white">Muhammadismoil</h1>
        </div>
        <div className="text-white  flex items-center gap-x-2 ">
          <AiOutlineMail size={20} color="white" />
          <h1 className="text-white">muhammadismoil@gmail.com</h1>
        </div>
        <div className="text-white flex items-center gap-x-2 cursor-pointer ">
          <AiOutlineLogout size={20} color="white" />
          <h1 className="text-white">Log Out</h1>
        </div>
      </div>
    </div>
  );
};

export default SettingsUser;
