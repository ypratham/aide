import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: "",
  setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};
