import { createContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

export default DropdownContext;
