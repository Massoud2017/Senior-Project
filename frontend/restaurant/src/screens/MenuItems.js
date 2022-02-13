import React from 'react'
import "./Menu.css";
function MenuItems({menuItem, onAddToCart}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt=""/>
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            {/* <button onClick={onAddToCart} className="add-cart-btn">Add To Cart</button> */}
                            <button onClick={() => onAddToCart(item)} className="add-cart-btn">Add To Cart</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
