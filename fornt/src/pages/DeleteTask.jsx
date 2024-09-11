import ErrovBack from "../components/ErrovBack";

const DeleteTask = () => {
  return (
    <div className="">
      <ErrovBack />
      <div className="container mx-auto my-52 flex flex-col gap-y-6 items-center justify-around p-2  w-72 sm:w-[500px]  border-2 border-red-200 rounded-md shadow-2xl shadow-red-200">
        <h1 className="text-3xl sm:text-4xl text-white">
          Are You Sure Delete this Task
        </h1>
        <button className="bg-red-300 outline-none text-white  px-2 py-1 rounded-md hover:transition hover:text-red-100">
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
