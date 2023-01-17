import {children, createContext, useContext, useState } from 'react';

// Valor inicial do nosso Contexto
const initialValue = []

// 1º - Criamos o Contexto 
// Create Context recebe como parametro o valor inicial ou por defeito no inicio da nossa aplicação
export const CartContext = createContext(initialValue);

//2º - Criação do Provider
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initialValue);

  // isto fui buscar a https://gist.github.com/tkrebs2/36cd7779947f7d286f3e545bfea247ee
  //mas percebi, grava no browser
  /*const [products, setProducts] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem('cart');
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });*/
  
  /*const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      //const valueToStore =
      //  value instanceof Function ? value(storedValue) : value;
        const valueToStore = value;
      // Save state
      setProducts(valueToStore);
      // Save to local storage
      window.localStorage.setItem('cart', JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };*/

  const addProduct = (product) => {
    let inCart = products.find(element => element.id  == product.id) 
    if (inCart != undefined){
      const tmpProducts = products.map((tmpproduct) =>{
        if (tmpproduct.id == product.id){
          tmpproduct.quantity += product.quantity;
        }
        return tmpproduct;
      })
      //setValue(tmpProducts);
      setProducts(tmpProducts);
    }else{
      let tmpProducts = products;
      tmpProducts.push(product);
      //setValue(tmpProducts);
      
      setProducts(prevproducts => [...prevproducts, product]);
    }
  };

  const removeProduct = (productId) => {
    setProducts(prevproducts => prevproducts.filter(product => product.id !== productId));
    //setValue(prevproducts => prevproducts.filter(product => product.id !== productId));
  };

  const getTotalProducts = () => {
    console.log(products);
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

  const changeQuantityCart = (id, signal) => {
      let  value = 1;
      if (signal == '-'){
        value = -1;
      }
      let tmpProducts = products;
      tmpProducts.forEach((element) => {
        if (element.id  == id){
          element.quantity += value;
        }
      });
      console.log('changeQuantityCart1 ');
      console.log(tmpProducts);
      //setValue(tmpProducts);
      setProducts(tmpProducts);
      console.log('changeQuantityCart2 '+products);
      console.log(products);
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