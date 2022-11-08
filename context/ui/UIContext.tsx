import { createContext } from "react";

interface ContexProps {
    sidemenuOpen: boolean;
    
    //methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
}

export const UIContext = createContext({} as ContexProps )