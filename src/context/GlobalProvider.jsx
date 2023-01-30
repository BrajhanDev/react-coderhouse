import React from 'react';
import { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({children}) => {

// contador global
const [countCart, setcountCart] = useState(0)
const [carrito, setcarrito] = useState([])
const [total, settotal] = useState(0)

    return (
        <GlobalContext.Provider value={{countCart, setcountCart, carrito, setcarrito, total, settotal}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;