import React from 'react';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import GlobalContext from '../../context/GlobalContext';


const CardWidget = () => {

  
    const { countCart } = useContext(GlobalContext)

    return (
        <div className='fs-2'>
            <div className='container-wid'>
            
            <span className="badge rounded-pill bg-primary ">{countCart}</span>
           <AiOutlineShoppingCart/>  
           </div>
        </div>

    
    );
};

export default CardWidget;