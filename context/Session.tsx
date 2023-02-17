import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { getMe, User } from "../api/users/usersClient";

type SessionContextType = {
  isLoggedIn: boolean;
  user: User | null;
  toggleLogginState: () => void;
  setSessionUser: (user: User | null) => void;
};

export const SessionContext = createContext<SessionContextType>({
  isLoggedIn: false,
  user: null,
  toggleLogginState: () => {},
  setSessionUser: () => {},
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [tokenProcessed, setTokenProcessed] = useState(false);

  const toggleLogginState = () => setIsLoggedIn((prev) => !prev);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("authToken");
      await AsyncStorage.clear();

      if (token) {
        setSessionUser(await getMe());
        toggleLogginState();
      }

      setTokenProcessed(true);
    })();
  }, []);

  const setSessionUser = (user: User | null) => setUser(user);

  return (
    <SessionContext.Provider
      value={{ isLoggedIn, user, toggleLogginState, setSessionUser }}
    >
      {tokenProcessed ? children : null}
    </SessionContext.Provider>
  );
};
