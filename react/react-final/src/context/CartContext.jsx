import {createContext, useContext, useState } from 'react';

// Valor inicial do nosso Contexto
const initialValue = [{id : "01", name : "Black and purple Ren Sneakers", img : "/src/assets/imgs/products/product01.jpg", quantity : 1, price : "123.00"},
                  {id : "02", name : "Black and white Kaiwa Sneakers", img : "/src/assets/imgs/products/product02.jpg", quantity : 3, price : "213.00"},
                  {id : "03", name : "Black and white Poplin Polo", img : "/src/assets/imgs/products/product03.jpg", quantity : 2, price : "312.00"},
                  {id : "04", name : "Black Canvas Workwear Cargo Pants", img : "/src/assets/imgs/products/product04.jpg", quantity : 1, price : "231.00"},
                  {id : "05", name : "Black ClassNameic Broadcloth Parka", img : "/src/assets/imgs/products/product05.jpg", quantity : 5, price : "321.00"},
                  {id : "06", name : "Black ClassNameic Chest Logo Hoodie", img : "/src/assets/imgs/products/product06.jpg", quantity : 1, price : "322.00"},
                  {id : "07", name : "Black ClassNameic Cross Dyed Long Coat", img : "/src/assets/imgs/products/product07.jpg", quantity : 6, price : "621.00"},
                  {id : "08", name : "Black ClassNameic Track Jacket", img : "/src/assets/imgs/products/product08.jpg", quantity : 7, price : "412.00"},
                ]

// 1º - Criamos o Contexto 
// Create Context recebe como parametro o valor inicial ou por defeito no inicio da nossa aplicação
export const CartContext = createContext(initialValue);

//2º - Criação do Provider
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initialValue);

  const addProduct = product => {
    setProducts(prevproducts => [...prevproducts, product]);
  };

  const removeProduct = productId => {
    setProducts(prevproducts => prevproducts.filter(product => product.id !== productId));
  };

  const getTotalProducts = () => {
    return products.length;
  }

  function getTotalPriceProduct (product) {
    return product.quantity * product.price;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        getTotalProducts,
        getTotalPriceProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};