import burgar1 from "../assets/Burgar/burgar (1).jpg";
import burgar2 from "../assets/Burgar/burgar (2).jpg";
import burgar3 from "../assets/Burgar/burgar (3).jpg";
import burgar4 from "../assets/Burgar/burgar (4).jpg";
import burgar5 from "../assets/Burgar/burgar (5).jpg";
import burgar6 from "../assets/Burgar/burgar (6).jpg";

import pizza1 from "../assets/pizza/pizza (1).jpg";
import pizza2 from "../assets/pizza/pizza (2).jpg";
import pizza3 from "../assets/pizza/pizza (3).jpg";
import pizza4 from "../assets/pizza/pizza (4).jpg";
import pizza5 from "../assets/pizza/pizza (5).jpg";
import pizza6 from "../assets/pizza/pizza (6).jpg";
import pizza7 from "../assets/pizza/pizza (7).jpg";
import pizza8 from "../assets/pizza/pizza (8).jpg";

import thai1 from "../assets/Thai/thai (1).jpg";
import thai2 from "../assets/Thai/thai (2).jpg";
import thai3 from "../assets/Thai/thai (3).jpg";
import thai4 from "../assets/Thai/thai (4).jpg";
import thai5 from "../assets/Thai/thai (5).jpg";
import thai6 from "../assets/Thai/thai (6).jpg";
import thai7 from "../assets/Thai/thai (7).jpg";
import thai8 from "../assets/Thai/thai (8).jpg";

import drink1 from "../assets/Drinks/drink (1).jpg";
import drink2 from "../assets/Drinks/drink (2).jpg";
import drink3 from "../assets/Drinks/drink (3).jpg";
import drink4 from "../assets/Drinks/drink (4).jpg";
import drink5 from "../assets/Drinks/drink (5).jpg";
import drink6 from "../assets/Drinks/drink (6).jpg";
import drink7 from "../assets/Drinks/drink (7).jpg";
import drink8 from "../assets/Drinks/drink (8).jpg";

export const burgarArr = [
  { id:401, quantity: [1], image: burgar1, price: 5.1, name: "Smoky BBQ Chicken Cheese Burger" },
  { id:402, quantity: [1], image: burgar2, price: 4.4, name: "Lamb and Tomato Stuffed Burger" },
  { id:403, quantity: [1], image: burgar5, price: 5.5, name: "Lentil and Mushroom Burger" },
  { id:404, quantity: [1], image: burgar3, price: 4.2, name: "Chicken Cheese Burger" },
  { id:405, quantity: [1], image: burgar4, price: 7.0, name: "Beef Cheese Burger" },
  { id:406, quantity: [1], image: burgar5, price: 9.5, name: "Lentil and Mushroom Burger" },
  { id:407, quantity: [1], image: burgar6, price: 10.5, name: "Perfect Lamb Satay Burger" },
  { id:408, quantity: [1], image: burgar5, price: 8.3, name: "Lentil and Mushroom Burger" },
];

export const pizzaArr = [
  { id:101, quantity: [1], image: pizza1, price: 6.1, name: "Smoky BBQ Chicken Cheese Burger" },
  { id:102, quantity: [1], image: pizza2, price: 5.4, name: "Lamb and Tomato Stuffed Burger" },
  { id:103, quantity: [1], image: pizza3, price: 4.5, name: "Lentil and Mushroom Burger" },
  { id:104, quantity: [1], image: pizza4, price: 7.2, name: "Chicken Cheese Burger" },
  { id:105, quantity: [1], image: pizza5, price: 8.0, name: "Beef Cheese Burger" },
  { id:106, quantity: [1], image: pizza6, price: 10.5, name: "Lentil and Mushroom Burger" },
  { id:107, quantity: [1], image: pizza7, price: 12.5, name: "Perfect Lamb Satay Burger" },
  { id:108, quantity: [1], image: pizza8, price: 3.3, name: "Lentil and Mushroom Burger" },
];

export const thaiArr = [
  { id:209, quantity: [1], image: thai1, price: 6.1, name: "Chicken Satay." },
  { id:208, quantity: [1], image: thai2, price: 5.4, name: "Pad Thai" },
  { id:207, quantity: [1], image: thai3, price: 4.5, name: "Thai Green Chicken Curry" },
  { id:206, quantity: [1], image: thai4, price: 7.2, name: "Som Tam (Papaya Salad)" },
  { id:205, quantity: [1], image: thai5, price: 8.0, name: "Thai Fish Green Curry" },
  {
    id:204, quantity: [1], image: thai6,
    price: 10.5,
    name: "Khao Klukh Krapi (Rice with Shrimp Paste)",
  },
  { id:203, quantity: [1], image: thai7, price: 12.5, name: "Massaman Curry" },
  { id:202, quantity: [1], image: thai8, price: 3.3, name: "Khao Pod Tod (Corn Cake)" },
];

export const drinksArr = [
  { id:301, quantity: [1], image: drink3, price: 1.5, name: "Cosmopolitan" },
  { id:302, quantity: [1], image: drink4, price: 4.2, name: "Negroni" },
  { id:303, quantity: [1], image: drink2, price: 3.4, name: "Margarita" },
  { id:304, quantity: [1], image: drink5, price: 3.0, name: "Moscow Mule" },
  { id:305, quantity: [1], image: drink6, price: 50.5, name: "Martini" },
  { id:306, quantity: [1], image: drink1, price: 2.1, name: "Old Fashioned" },
  { id:307, quantity: [1], image: drink7, price: 7.5, name: "Mojito" },
  { id:308, quantity: [1], image: drink8, price: 6.3, name: "Whiskey Sour" },
];

const productArr = [{ pizzaArr, burgarArr }];

export default productArr;

