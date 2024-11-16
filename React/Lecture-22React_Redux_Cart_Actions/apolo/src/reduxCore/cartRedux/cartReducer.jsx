import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";


const cartReducer = (data =[] , action) => {
  switch(action.type){
    case ADD_TO_CART:
      console.warn('AddToCartCalled'  , action);
      return[action.data , ...data]
    case REMOVE_TO_CART:
      console.warn('RemoveToCartCalled'  , action);
      const remiderItem = data.filter((item) => item.id !== action.data)
      return[...remiderItem]
    case EMPTY_CART:
      console.warn('EmptyCartCalled'  , action);
      return data = []
    case INCREMENT_TO_CART:return {

    }
    case DECREMENT_TO_CART: return{


    }
    default: return data
  }
}

export default cartReducer