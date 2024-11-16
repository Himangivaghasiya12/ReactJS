import {buy_cake} from '../redux/cake/CakeAction'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h1>NumOfCakes = {props.numOfCake}</h1>
      <button onClick={props.buy_cake}>Action</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return{
    numOfCake:state.numOfCake
  }
}

const mapDispatchToProps = dispatch =>{
  console.log(dispatch);
  return{
    buy_cake:() => dispatch(buy_cake())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
