import React from 'react'
import Data from './MenuList.js'
import MenuItems from '../components/MenuItems.js'

function Menu(item) {
  
    return (
        <div>
            const items = Data.map((item) =>{
            <Data 
                name={item.name}
                price={item.price}
                image={item.image}
            />
             })
           <h1>Menu</h1> 
           {MenuItems}
        </div>
    )
}

export default Menu;
