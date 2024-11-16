const redux = require('redux')
const {applyMiddleware} = require('redux')
const createStore = redux.createStore
const Reduxlogger = require('redux-logger')
const logger = Reduxlogger.createLogger()

//constant

const INCREMENT  = 'INCREMENT'
const DECREMENT = 'DECREMENT'


// Action

const Increment = () => {
  return{
    type:INCREMENT
  }
}

const Decrement = () => {
  return{
    type:DECREMENT
  }
}

//initialState


const initialState = {
  count:10
}

//  reducer

const reducer = (state = initialState  , action) => {
  switch (action.type) {
    case INCREMENT:return{
      ...state,
      count:state.count + 1
    } 
    case DECREMENT:return{
      ...state,
      count:state.count - 1
    } 
    default: return state
  }
}

// Store

const store = createStore(reducer , applyMiddleware(logger))

store.subscribe(() => {})

store.dispatch(Increment())
store.dispatch(Increment())
store.dispatch(Decrement())

