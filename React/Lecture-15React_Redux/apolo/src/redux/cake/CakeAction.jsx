import { BUY_CAKE } from "./CakeConstant";

export function buy_cake() {
  console.log('buy_cake action');
  return{
    type:BUY_CAKE
  }
}