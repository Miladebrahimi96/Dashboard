import React, { useState, createContext } from 'react';

export const DarkContext = createContext();

const DarkModeContext = ({children}) => {

    const [dark, setDark] = useState(false);

    return (
        <DarkContext.Provider value={{dark, setDark}}>
            {children}
        </DarkContext.Provider>
    );
};

export default DarkModeContext;