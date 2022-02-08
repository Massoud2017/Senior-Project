import {useState} from 'react';
import Button from './Button.js'
import {MenuList} from './MenuList.js'
import Menu from './Menu.js'
import {menuItem} from '../components/MenuItem.js'
const allCategories = ['All', ...new Set(MenuList.map(item => item.type))];

console.log(allCategories);

function Filter() {
        const [menuItem, setMenuItem] = useState(MenuList);
        const [buttons, setButtons] = useState(allCategories);
      
        //Filter Function
        const filter = (button) =>{
           const filterData = MenuList.filter(item => item.type === button);
           setMenuItem(filterData)
        }
  return <div className='list'>
       <Button filter={filter}  />
       <Menu menuItem={menuItem} />
  </div>;
}

export default Filter;
