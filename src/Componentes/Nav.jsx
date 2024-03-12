import React, { useContext, useState } from 'react';
import { Context } from './Context';
import '../App.css';
import CardsContainer from './CardsContainer';

export default function Nav() {
    const [showCard, setChowcard]= useState(false);
    const{getQuantity}=useContext(Context)
    function handleCardChange(){
        setChowcard(!showCard)
    }
    let total = getQuantity();
    return (
        <>
            <div className="Nav-bar">
                <div className='Nav-bar-logo'>your<span>Shop</span></div>
                <div className="NavCards">
                    <li onClick={handleCardChange}><i className="fa-solid fa-cart-shopping"></i><div className='totalNumber'>{total}</div></li>
                    
                </div>
            </div>
            {showCard&&<CardsContainer/>}
        </>
    );
}
