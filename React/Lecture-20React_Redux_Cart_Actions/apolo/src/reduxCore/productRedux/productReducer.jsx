import { PRODUCT_GET , PRODUCT_SET } from "../Constant";

const productReducer = (state , action) => {
  switch(action.type){
    case PRODUCT_GET:return{

    }
    default:return state
  }
}

export default productReducer