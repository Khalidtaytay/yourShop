import { createContext, useContext, useEffect, useState } from 'react';
import {data} from './data';
import { Context } from './Context';
import '../App.css';
export default function Store() {
    const { addToCart, cartItems,data} = useContext(Context);
    const [shuffledData, setShuffledData] = useState([]);

    useEffect(() => {
        // Shuffle the data array when the component mounts or when data changes
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setShuffledData(shuffled);
    }, [data]);
    function filterItemsByCategory(category) {
        return data.filter(item => item.category === category);
    }
    return (
        <>
        <div className="background"></div>
         <div className="store">
          
         <div className="store-category">
            <div className="filtre-btns">
                    <h2 className='h2-category'>Category:</h2>
                    <button onClick={() => setShuffledData(filterItemsByCategory('informatique'))}>informatique<i class="fa-solid fa-caret-down"></i></button>
                    <button onClick={() => setShuffledData(filterItemsByCategory('clothes'))}>clothes<i class="fa-solid fa-caret-down"></i></button>
                    <button onClick={() => setShuffledData(filterItemsByCategory('other'))}>other<i class="fa-solid fa-caret-down"></i></button>
                    <button onClick={() => {const shuffled = [...data].sort(() => Math.random() - 0.5);setShuffledData(shuffled);}}>All</button>
            </div>
         </div>
        
             <div className="items-container">
                 {shuffledData.map((item) => {
                     let amount = cartItems[item.id];
                        return (
                        <div className="item" key={item.id}>
                            <img id='itemImg' src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <div className="item-infos">
                                
                                <div className="price">{item.price}$</div>
                            </div>
                            <div className="add-to-card">
                            <button onClick={() => addToCart(item.id)}>{amount > 1&& <>({amount})</>}{amount == 0? <div className='add-to-card'>Add to card</div>:<div className='addedto-card'>Added to card</div>}</button>    
                               
                            </div>
                        </div>
                    );

                 })}
             </div>
          </div>
        </>
    );
};
