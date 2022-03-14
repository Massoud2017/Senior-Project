import A1 from '../assets/A1.PNG';
import A2 from '../assets/A2.PNG';
import A5 from '../assets/A5.PNG';
import A6 from '../assets/A6.PNG';
import G1 from '../assets/G1.PNG';
import Ten from '../assets/Ten.PNG';
import Eleven from '../assets/Eleven.PNG';
import N1 from '../assets/N1.PNG';
import N2 from '../assets/N2.PNG';
import N4 from '../assets/N4.PNG';
import M1 from '../assets/M1.PNG';
import M3 from '../assets/M3.PNG';
import M4 from '../assets/M4.PNG';
import M5 from '../assets/M5.PNG';
import M6 from '../assets/M6.PNG';
import M7 from '../assets/M7.PNG';
import R1 from '../assets/r1.PNG';
import R2 from '../assets/r2.PNG';
import K1 from '../assets/k1.PNG';
import Smoothies from '../assets/Smoothies.PNG';
import CaramelFlan from '../assets/CaramelFlan.PNG';
import FillerPicture from '../assets/white_square.PNG';
import NoImageAvailable from '../assets/NoImageAvailable.PNG';
import NoImage from '../assets/NoImage.PNG'
// export default [
const MenuList = [
    {   
        id: '1',
        type: 'Appetizers and Salads',
        name: 'Ru`s Special Trio',
        vietnamese_name: 'Tôm Au Việt',
        price: 9.95, 
        image: A1,
    },
    {   
        id: '2',
        type: 'Appetizers and Salads',
        name: 'Herb Roasted Quail',
        vietnamese_name: 'Chim Cút',
        price: 8.25,
        image: A2,
    },
    {   
        id: '3',
        type: 'Appetizers and Salads',
        name: 'Crispy Salt and Pepper Calamari',
        vietnamese_name: 'Mực Chiên Dòn',
        price: 7.95,
        image: NoImage,
    },
    {   
        id: '4',
        type: 'Appetizers and Salads',
        name: 'Homemade Style Crunchy Egg Rolls',
        vietnamese_name: 'Chả Giò',
        price: 5.65,
        image: A5,
    },
    {   
        id: '5',
        type: 'Appetizers and Salads',
        name: 'Wok-Tossed Baby Clam Served w/ Shrimp Chip',
        vietnamese_name: 'Hến Xúc Bánh Tráng',
        price: 9.95,
        image: A6,
    },
    {   
        id: '6',
        type: 'Appetizers and Salads',
        name: 'Lemon Cured Shrimp Cabbage Salad',
        vietnamese_name: 'Gỏi Tôm Tái Chanh',
        price: 9.95,
        image: G1,
    },
    {   
        id: '7',
        type: 'Appetizers and Salads',
        name: 'Chicken Salad',
        vietnamese_name: 'Gỏi Gà',
        price: 7.75,
        image: NoImage, // no picture
    },
    {   
        id: '8',
        type: 'Pho - Beef Noodle Soup',
        name: 'Pho Combo w/ Rare Steak, Brisket, Tendon & Tripe',
        vietnamese_name: 'Phở Đặc Biệt',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '9',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak, Well-done Brisket and Tendon',
        vietnamese_name: 'Phở Tái Chín Gân',
        price: 10.75, 
        image: NoImage, // no picture

    },
    {   
        id: '10',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak, Well-done Brisket and Tripe',
        vietnamese_name: 'Phở Tái Chín Sách',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '11',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak, Well-done Brisket and Meatballs',
        vietnamese_name: 'Phở Tái Chín Bò Viên',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '12',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak and Well-Done Brisket',
        vietnamese_name: 'Phở Tái Chín',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '13',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak and Beef Meatballs',
        vietnamese_name: 'Phở Tái Bò Viên',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '14',
        type: 'Pho - Beef Noodle Soup',
        name: 'Rare Steak',
        vietnamese_name: 'Phở Tái',
        price: 10.75,
        image: NoImage, // no picture
    },
    {   
        id: '15',
        type: 'Pho - Beef Noodle Soup',
        name: 'Pho with Chicken',
        vietnamese_name: 'Phở Gà',
        price: 9.75,
        image: NoImage, // no picture
    },
    {   
        id: '16',
        type: 'Pho - Beef Noodle Soup',
        name: 'Pho with Shrimps',
        vietnamese_name: 'Phở Tôm',
        price: 10.95,
        image: NoImage, // no picture
    },
    {   
        id: '17',
        type: 'Pho - Beef Noodle Soup',
        name: 'Spicy Sate Pho',
        vietnamese_name: 'Phở Satế',
        price: 10.75,
        image: Ten,
    },
    {   
        id: '18',
        type: 'Pho - Beef Noodle Soup',
        name: 'Pho w/ Rare Filet Mignon (Quarter Pound Tenderloin)',
        vietnamese_name: 'Phở Tái Filet Mignon',
        price: 11.95,
        image: Eleven,
    },
    {   
        id: '19',
        type: 'Noodle Soups',
        name: 'Braised Duck Soup with Egg Noodle',
        vietnamese_name: 'Mì Vịt Tiềm',
        price: 11.75,
        image: N1,
    },
    {   
        id: '20',
        type: 'Noodle Soups',
        name: 'Wonton Spicy Sate Soup w/ Egg or Rice Noodle',
        vietnamese_name: 'Mì Hoành Thánh Súp Satế',
        price: 10.75,
        image: N2,
    },
    {   
        id: '21',
        type: 'Noodle Soups',
        name: 'Thick Crab Soup q/ Tapioca Noodle or Udon',
        vietnamese_name: 'Bánh Canh Cua',
        price: 10.95,
        image: N4,
    },
    {   
        id: '22',
        type: 'Shareable Dishes',
        name: 'BoBo Butter Crunchy Beef',
        vietnamese_name: 'Bò Bơ',
        price: 11.95,
        image: M1,
    },
    {   
        id: '23',
        type: 'Shareable Dishes',
        name: 'Lemon Grass Chicken',
        vietnamese_name: 'Gà Sả Ớt',
        price: 11.45,
        image: NoImage, //no picture
    },
    {   
        id: '24',
        type: 'Shareable Dishes',
        name: 'Citrus Butter Prawn (Whole)',
        vietnamese_name: 'Tôm Hoàng Kỳ',
        price: 13.95,
        image: M3,
    },
    {   
        id: '25',
        type: 'Shareable Dishes',
        name: 'Orange Glazed Crispy Shell Shrimp',
        vietnamese_name: 'Tôm Chiên Da Dòn',
        price: 13.95,
        image: M4,
    },
    {   
        id: '26',
        type: 'Shareable Dishes',
        name: 'Spicy Satay Squid',
        vietnamese_name: 'Mực Satế',
        price: 11.95,
        image: M5,
    },
    {   
        id: '27',
        type: 'Shareable Dishes',
        name: 'Crispy Garlic Rainbow Trout (Whole)',
        vietnamese_name: 'Cá Mè Xốt Tỏi',
        price: 21.00,
        image: M6,
    },
    {   
        id: '28',
        type: 'Shareable Dishes',
        name: 'Herb-Braised Duck (Half)',
        vietnamese_name: 'Vịt Tiềm Ngũ Vị',
        price: 14.95,
        image: M7,
    },
    {   
        id: '29',
        type: 'Shareable Dishes',
        name: 'Eggplant w/ Sweet & Sour Sauce w/ Chicken',
        vietnamese_name: 'Cà Tím Xào',
        price: 11.45,
        image: NoImage, //no picture
    },
    {   
        id: '30',
        type: 'Shareable Dishes',
        name: 'Eggplant w/ Sweet & Sour Sauce w/ Beef',
        vietnamese_name: 'Cà Tím Xào',
        price: 11.95,
        image: NoImage, //no picture
    },
    {   
        id: '31',
        type: 'Shareable Dishes',
        name: 'Eggplant w/ Sweet & Sour Sauce w/ Shrimp',
        vietnamese_name: 'Cà Tím Xào',
        price: 13.95,
        image: NoImage, //no picture
    },
    {   
        id: '32',
        type: 'Shareable Dishes',
        name: 'Green Bean & Mushroom w/ Sate Sauce and Chicken',
        vietnamese_name: 'Đậu Que & Nấm Xào',
        price: 11.45,
        image: NoImage, //no picture
    },
    {   
        id: '33',
        type: 'Shareable Dishes',
        name: 'Green Bean & Mushroom w/ Sate Sauce and Beef',
        vietnamese_name: 'Đậu Que & Nấm Xào',
        price: 11.95,
        image: NoImage, //no picture
    },
    {   
        id: '34',
        type: 'Shareable Dishes',
        name: 'Green Bean & Mushroom w/ Sate Sauce and Shrimp',
        vietnamese_name: 'Đậu Que & Nấm Xào',
        price: 13.95,
        image: NoImage, //no picture
    },
    {
        id: '35',
        type: 'One Dish Meals',
        name: 'Special Green Fried Rice w/ Cornish Game Hen',
        vietnamese_name: 'Gỏi Chiên Xốt Cải Gà Rô Ti',
        price: 11.95, 
        image: K1
    },
    {
        id: '36',
        type: 'One Dish Meals',
        name: 'Green Fried Rice w/ Grilled Garlic Prawns',
        vietnamese_name: 'Cơm Chiên Xốt Cải Tôm Nướng',
        price: 12.95, 
        image: NoImage //no picture
    },
    {
        id: '37',
        type: 'One Dish Meals',
        name: 'Grilled Garlic Prawns & Pork Chop w/ Steamed Jasmine Rice',
        vietnamese_name: 'Cơm Sườn Nướng, Tôm Nướng',
        price: 10.95,
        image: R1
    },
    {
        id: '38',
        type: 'One Dish Meals',
        name: 'Grilled Pork Chops w/ Steamed Jasmine Rice',
        vietnamese_name: 'Cơm Sườn Nướng',
        price: 10.45, 
        image: R2
    },
    {
        id: '39',
        type: 'Beverages',
        name: 'Iced Coffee - Vietnamese Dark Roast Coffee w/ Condensed Milk',
        vietnamese_name: 'Cà phê sữa đá',
        price: 4.35,
        image: NoImage, //no picture
    },
    {
        id: '40',
        type: 'Beverages',
        name: 'Soda Egg Milk',
        vietnamese_name: 'Soda sữa hột gà',
        price: 4.89,
        image: NoImage,
    },
    {
        id: '41',
        type: 'Beverages',
        name: 'Sparkling Mango Juice',
        vietnamese_name: 'Soda xoài ép',
        price: 3.85,
        image: NoImage,
    },
    {
        id: '42',
        type: 'Beverages',
        name: 'Thai Tea',
        vietnamese_name: 'Trà thái',
        price: 4.25,
        image: NoImage,
    },
    {
        id: '43',
        type: 'Beverages',
        name: 'Passion Fruit w/ Chia',
        vietnamese_name: 'Nước chanh dây hột é',
        price: 3.85,
        image: NoImage,
    },
    {
        id: '44',
        type: 'Beverages',
        name: 'Fresh Squeezed Orange Juice',
        vietnamese_name: 'Nước cam vắt tươi',
        price: 4.25,
        image: NoImage,
    },
    {
        id: '45',
        type: 'Beverages',
        name: 'Soft Drinks (Coke, Sprite, Sunkist, etc.)',
        vietnamese_name: '',
        price: 1.85,
        image: NoImage,
    }, 
    {
        id: '46',
        type: 'Beverages',
        name: 'Avacado Smoothie',
        vietnamese_name: 'Sinh tố bơ',
        price: 4.65,
        image: Smoothies,
    },
    {
        id: '47',
        type: 'Beverages',
        name: 'Might Mango Smoothie',
        vietnamese_name: 'Sinh tố xoài',
        price: 4.65,
        image: Smoothies,
    },
    {
        id: '48',
        type: 'Beverages',
        name: 'Strawberry Banana Smoothie',
        vietnamese_name: 'Sinh tố dâu',
        price: 4.65,
        image: Smoothies,
    },
    {
        id: '49',
        type: 'Beverages',
        name: 'Matcha Green Tea Smoothie',
        vietnamese_name: 'Sinh tố trà xanh',
        price: 4.65,
        image: Smoothies,
    },
    {
        id: '50',
        type: 'House Special Dessert',
        name: 'Pandan Caramel Flan',
        vietnamese_name: '',
        price: 3.95,
        image: CaramelFlan,
    }
];

export default MenuList;