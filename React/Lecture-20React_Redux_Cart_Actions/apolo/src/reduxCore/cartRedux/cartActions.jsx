import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART  , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";

export const addToCart = () => {
  return{
    type:ADD_TO_CART
  }
}

export const removeToCart = () => {
  return{
    type:REMOVE_TO_CART
  }
}

export const emptyCart = () => {
  return{
    type:EMPTY_CART
  }
}


export const incrementToCart = () => {
  return{
    type:INCREMENT_TO_CART
  }
}


export const decrementToCart = () => {
  return{
    type:DECREMENT_TO_CART
  }
}


