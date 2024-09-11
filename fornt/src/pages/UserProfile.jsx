import React, { useEffect, useState } from "react";
import UserNavBar from "../components/UserNavBar";
import { BiBookOpen, BiNotepad, BiNote } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
const UserProfile = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/gettasks", { withCredentials: true })
      .then(({ data }) => {
        setTasks(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <UserNavBar />
      <div className="px-2">
        <h1 className="text-2xl text-white mb-5">Cart Tasks</h1>
        <div className="w-fill grid grid-cols-1 sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="border-2 border-red-100 rounded-md relative p-2">
            <div className="text-white flex gap-x-2 items-center">
              <BiBookOpen className="size-6 sm:size-6" color="white" />
              <h1 className="text-xl">Test 1</h1>
            </div>
            <div className="text-white flex gap-x-2 items-center">
              <BiNote
                color="white"
                className="self-start size-6 sm:size-6 md:size-6"
              />
              <h1 className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div className="text-white absolute top-1 right-1 flex justify-center items-center gap-x-1">
              <AiOutlineEdit className=" cursor-pointer" size={20} />
              <AiOutlineDelete className=" cursor-pointer" size={20} />
            </div>
          </div>
          <div className="border-2 border-red-100 rounded-md relative p-2">
            <div className="text-white flex gap-x-2 items-center">
              <BiBookOpen className="size-6 sm:size-6" color="white" />
              <h1 className="text-xl">Test 2</h1>
            </div>
            <div className="text-white flex gap-x-2 items-center">
              <BiNote
                color="white"
                className="self-start size-6 sm:size-6 md:size-6"
              />
              <h1 className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div className="text-white absolute top-1 right-1 flex justify-center items-center gap-x-1">
              <AiOutlineEdit className=" cursor-pointer" size={20} />
              <AiOutlineDelete className=" cursor-pointer" size={20} />
            </div>
          </div>
          <div className="border-2 border-red-100 rounded-md p-2 relative">
            <div className="text-white flex gap-x-2 items-center">
              <BiBookOpen className="size-6 sm:size-6" color="white" />
              <h1 className="text-xl">Test 3</h1>
            </div>
            <div className="text-white flex gap-x-2 aitems-center">
              <BiNote
                color="white"
                className="self-start size-6 sm:size-6 md:size-6"
              />
              <h1 className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div className="text-white absolute top-1 right-1 flex justify-center items-center gap-x-1">
              <AiOutlineEdit className=" cursor-pointer" size={20} />
              <AiOutlineDelete className=" cursor-pointer" size={20} />
            </div>
          </div>
          <div className="border-2 border-red-100 rounded-md p-2 relative">
            <div className="text-white flex gap-x-2 items-center">
              <BiBookOpen color="white" className="size-6 sm:size-6" />
              <h1 className="text-xl">Test 4</h1>
            </div>
            <div className="text-white flex gap-x-2 aitems-center">
              <BiNote
                color="white"
                className="self-start size-6 sm:size-6 md:size-6"
              />
              <h1 className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div className="text-white absolute top-1 right-1 flex justify-center items-center gap-x-1">
              <AiOutlineEdit className=" cursor-pointer" size={20} />
              <AiOutlineDelete className=" cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
