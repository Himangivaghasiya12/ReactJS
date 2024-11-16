const redux = require('redux')
const createStore = redux.createStore

// Constant

const BUY_CAKE = 'BUY_CAKE'

// Action

const buy_cake = () => {
  return{
    type:BUY_CAKE
  }
}

// initialState

const initialState = {
  numOfCake:10
}

// reducer

const reducer = (state = initialState  , action) => {
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCake:state.numOfCake - 1
      }
    default: return state
  }
}

// store

const store = createStore(reducer)

// reduxLogic

console.log('initialState Is' , store.getState());

store.subscribe(() => console.log('UpdatedState Is' , store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())