import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const CardWidget = () => {

    return (
        <div className='fs-2'>
            <div className='container-wid'>
            
            <span className="badge rounded-pill bg-primary ">4</span>
           <AiOutlineShoppingCart/>  
           </div>
        </div>

    
    );
};

export default CardWidget;