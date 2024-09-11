import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const ErrovBack = () => {
  return (
    <Link
      to="/userprofile"
      className="text-white hover:text-red-100 bg-red-300 px-1 py-1 flex  items-center justify-center gap-x-1 rounded-md mt-5 ml-5 w-24 mb-16"
    >
      <BiArrowBack className="mt-1" size={20} />
      <span className="text-lg">Back</span>
    </Link>
  );
};

export default ErrovBack;
