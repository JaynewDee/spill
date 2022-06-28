import { ContextSetter } from "@apollo/client/link/context";
import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";

// interface UserContextType {
//   user: {} | null;
//   signin: any;
//   signout: any
// }

const UserContext: any = createContext({});

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      `User Context consumption attempted outside of the context provider.`
    );
  }

  return context;
};
const UserContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);

  const signin = useCallback((user: any) => {
    setUser(user);
  }, []);
  const signout = useCallback(() => {
    setUser(null);
  }, []);
  const contextValues = useMemo(
    () => ({
      user,
      signin,
      signout,
    }),
    [user, signin, signout]
  );
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserContextProvider };
