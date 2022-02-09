import React from 'react'
import "./Menu.css";
function MenuItems({menuItem}) {
    return (
        <div className="item">
            {
                  menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                        <img src={item.image} alt=""/>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
