import { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SingUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSingUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await axios.post("http://localhost:5050/singup", {
        name,
        email,
        password,
      });

      setData({ name: "", email: "", password: "" });
      toast.success("Successfuly sing uped");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast(error.message);
      }
    }
  };

  return (
    <div className=" mb-28">
      <NavBar />
      <div
        className="conatiner mx-auto bg-custom-gradient hover:shadow-xl  w-64  py-4 px-3
      hover:shadow-red-300 rounded-md hover:transition"
      >
        <h1 className="text-2xl text-white text-center mb-5">Sing Up</h1>
        <form
          action="/singup"
          method="POST"
          className="flex flex-col gap-y-4 text-white p-1"
          onSubmit={handleSingUp}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name here..."
              required
              className="outline-none text-gray-700 selection:bg-red-200  px-2 py-1 rounded-md"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email here..."
              required
              className="outline-none text-gray-700 selection:bg-red-200  px-2 py-1 rounded-md"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Email</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password here..."
              required
              className="outline-none text-gray-700 selection:bg-red-200  px-2 py-1 rounded-md"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="shadow-sm shadow-red-200 hover:shadow-md hover:shadow-red-200 hover:transition self-center w-32 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
