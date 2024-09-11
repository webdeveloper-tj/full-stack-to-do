import React from "react";
import UserNavBar from "../components/UserNavBar";

const CreateTask = () => {
  return (
    <div>
      <UserNavBar />
      <div
        className="conatiner mx-auto bg-custom-gradient  w-64  py-4 px-3 
      hover:shadow-xl hover:shadow-red-300 rounded-md hover:transition"
      >
        <h1
          className="text-2xl text-white text-center mb-5
        "
        >
          New Task
        </h1>
        <form
          action="/singup"
          method="POST"
          className="flex flex-col gap-y-4 text-white p-1"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              name="Title"
              id="Title"
              placeholder="Enter Title here..."
              required
              className="outline-none text-gray-700 selection:bg-red-200  px-2 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Body</label>
            <textarea
              name="text"
              id="tex"
              placeholder="Enter Body here..."
              required
              className="outline-none text-gray-700 selection:bg-red-200  px-2 py-1 rounded-md"
            ></textarea>
          </div>
          <button className="shadow-sm outline-none shadow-red-200 hover:shadow-md hover:shadow-red-200 hover:transition self-center w-32 ">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
