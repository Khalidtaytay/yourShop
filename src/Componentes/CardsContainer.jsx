import { useContext } from 'react';
import { Context } from './Context';

export default function CardsContainer() {
    const { cartItems, removeFromCart, data,getToatl } = useContext(Context);
    let total = getToatl();
    return (
        <div className="CardsPage">
            <div className='h1-total'>
                <h1>Your Cart : </h1>
                <h2 id='total'>{total}$</h2>
            </div>
            {data.map((item) => {
                const amount = cartItems[item.id];
                if (amount > 0) {
                    return (
                        <div className="cratSelected" key={item.id}>
                            <div className='number-card'>{amount}</div>
                            <h3 className='cratSelected-h3'>{item.name}</h3>
                            <div className='cardInfos'>
                                <img className='cratSelected-img' src={item.image} alt="" />
                                <div className='price-btn'>
                                    <div className="price">{item.price}$</div>
                                    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}
