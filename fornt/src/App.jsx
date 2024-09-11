import { Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateTask from "./pages/CreateTask";
import UpdateTask from "./pages/UpdateTask";
import DeleteTask from "./pages/DeleteTask";
import NotFound from "./pages//NotFound";
import Footer from "./components/Footer";
import SettingsUser from "./pages/SettingsUser";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
function App() {
  return (
    <UserContextProvider>
      <div className="bg-custom-gradient selection:bg-red-300 overflow-auto h-screen scrollbar-hide ">
        <Toaster position="bottom-left" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile/create" element={<CreateTask />} />
          <Route path="/userprofile/update/:id" element={<UpdateTask />} />
          <Route path="/userprofile/delete/:id" element={<DeleteTask />} />
          <Route path="/userprofile/settingsuser" element={<SettingsUser />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
