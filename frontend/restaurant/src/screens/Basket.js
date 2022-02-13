import React from 'react';

function Basket(props) {
    const { cartItems, onAddToCart, onRemoveFromCart } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.0725;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const totalPrice = itemsPrice + taxPrice;

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {/*-- true && expression evaluates to expression */}
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((dish) => (
                    <div key={dish.id} className="row">
                        <div className="col-2">{dish.name}</div>
                        <div className="col-2">
                            <button onClick={() => onRemoveFromCart(dish)} className="add-cart-btn remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAddToCart(dish)} className="add-cart-btn add">
                                +
                            </button>
                        </div>

                        <div className="col-2 text-right">
                            {dish.qty} x ${dish.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                        <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    {/* <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div> */}
                    <div className="row">
                        <div className="col-2"><strong>Total Price</strong></div>
                        <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="row">
                        <button className="add-cart-btn" onClick={() => alert('Need to Implement Checkout!')}>Checkout</button>
                    </div>
                </>
                )}
            </div>
        </aside>
    )
}

export default Basket;