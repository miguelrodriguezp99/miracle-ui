import { createContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

export default DropdownContext;
