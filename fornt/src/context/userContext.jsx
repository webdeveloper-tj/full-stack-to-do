import axios from "axios";
import { useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("https://localhost:5050/settings").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={children} user={user} setUser={setUser}>
      {children}
    </UserContext.Provider>
  );
}
