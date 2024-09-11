import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="sm:mb-16 md:mb-36 lg:mb-38">
      <NavBar />

      <div
        className=" bg-custom-gradient px-5 py-5 w-64 sm:w-80 lg:w-[450px] mx-auto rounded-xl 
      shadow-2xl hover:shadow-2xl hover:shadow-red-200 hover:transition "
      >
        <h1 className="text-4xl text-white leading-relaxed ">
          Welcome To "To Do App"
        </h1>
      </div>
      <h1 className="text-3xl text-white ml-2 my-5">Options</h1>
      <div className="w-fill grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-2 md:grid-cols-3 lg:grid-cols-4   px-2 mt-5">
        <div className="shadow-xl bg-red-100 text-xl p-5 rounded-lg text-red-400">
          Comfortable Use
        </div>
        <div className="shadow-xl p-5 bg-red-100 text-xl rounded-lg text-red-400">
          Create New Task
        </div>
        <div className="shadow-xl p-5 bg-red-100 text-xl rounded-lg text-red-400">
          Update Task
        </div>
        <div className="shadow-xl p-5  bg-red-100 text-xl rounded-lg text-red-400">
          Detele Task
        </div>
        <div className="shadow-xl p-5 bg-red-100 text-xl rounded-lg text-red-400">
          Search Task
        </div>
      </div>
    </div>
  );
};

export default Home;
