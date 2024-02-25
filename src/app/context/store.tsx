
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,

}

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
   
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
   
    
    return (
        <GlobalContext.Provider value={{ userId, setUserId,}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);