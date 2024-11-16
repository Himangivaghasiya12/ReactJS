import { ADD_TO_WHISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST   , WISHLIST_TO_CART } from "../Constant";


const wishlistReducer = (data =[] , action) => {
  switch(action.type){
    case ADD_TO_WHISHLIST:
      return[action.data   , ...data]
    case REMOVE_TO_WISHLIST:
      const reminderWish = data.filter((item) => item.id !== action.data)
      return[...reminderWish]
    case EMPTY_WISHLIST:return{

    }
    case WISHLIST_TO_CART:return{

    }
    default:return data
  }
}

export default wishlistReducer