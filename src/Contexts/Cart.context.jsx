import { createContext, useState } from "react";

//after creating the initial context for each value youre passing
export const UserContext = createContext({
  cartToggle: false,
  setCartToggle: () => null,
  search: "",
  setSearch: () => null,
  pastSearch: [],
  isDropdownHovered: false,
  setIsDropDownHovered: () => {},
});

//you then send out this context with a value encapsulated into a value

export const UserProvider = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [pastSearch, setPastSearch] = useState([]);
  const [isDropdownHovered, setIsDropDownHovered] = useState(false);

  const value = {
    cartToggle,
    setCartToggle,
    search,
    setSearch,
    pastSearch,
    isDropdownHovered,
    setIsDropDownHovered,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
