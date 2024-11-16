import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";


const cartReducer = (state , action) => {
  switch(action.type){
    case ADD_TO_CART:return{

    }
    case REMOVE_TO_CART:return{

    }
    case EMPTY_CART:return{

    }
    case INCREMENT_TO_CART:return {

    }
    case DECREMENT_TO_CART: return{


    }
    default: return state
  }
}

export default cartReducer