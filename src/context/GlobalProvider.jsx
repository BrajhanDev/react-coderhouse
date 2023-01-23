import React from 'react';
import { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({children}) => {

// contador global
const [countCart, setcountCart] = useState(0)
const [carrito, setcarrito] = useState([])

    return (
        <GlobalContext.Provider value={{countCart, setcountCart, carrito, setcarrito}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;