import { createContext, useState } from "react";

//after creating the initial context for each value youre passing
export const UserContext = createContext({
  cartToggle: false,
  setCartToggle: () => null,
  search: "",
  setSearch: () => null,
  pastSearch: [],
});

//you then send out this context with a value encapsulated into a value

export const UserProvider = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [pastSearch, setPastSearch] = useState([]);

  const value = {
    cartToggle,
    setCartToggle,
    search,
    setSearch,
    pastSearch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
