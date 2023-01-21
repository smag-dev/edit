import {children, createContext, useContext, useState } from 'react';

// Valor inicial do nosso Contexto
const initialValue = []

// 1º - Criamos o Contexto 
// Create Context recebe como parametro o valor inicial ou por defeito no inicio da nossa aplicação
export const CartContext = createContext(initialValue);

//2º - Criação do Provider
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initialValue);
 
  const addProduct = (product) => {
    let inCart = products.find(element => element.id  == product.id) 
    if (inCart != undefined){
      const tmpProducts = products.map((tmpproduct) =>{
        if (tmpproduct.id == product.id){
          tmpproduct.quantity += product.quantity;
        }
        return tmpproduct;
      })
      setProducts(tmpProducts);
    }else{
      setProducts(prevproducts => [...prevproducts, product]);
    }
  };

  const removeProduct = (productId) => {
    setProducts(prevproducts => prevproducts.filter(product => product.id !== productId));
  };

  const getTotalProducts = () => {

    return products.length;
  }

  const  getTotalPriceProduct = (product) => {
    return (product.quantity * product.price);
  }

  const  getTotalPriceProducts = () => {
    const total = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
  );
    return total;
  }

  const changeQuantityCart = (id, value) => {
    const newProducts = products.map((element) => {
      if (element.id  == id){
        element.quantity = value;
      }
      return element;
    });
    setProducts(newProducts);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        getTotalProducts,
        getTotalPriceProduct,
        getTotalPriceProducts,
        changeQuantityCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};