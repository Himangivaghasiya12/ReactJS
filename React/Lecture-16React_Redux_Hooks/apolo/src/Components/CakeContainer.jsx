import { buy_cake } from '../redux/cake/CakeAction'
import { buy_choco } from '../redux/cake/CakeAction'
import { useSelector , useDispatch } from 'react-redux'
// import { connect } from 'react-redux'

const CakeContainer = () => {

  const data = useSelector(state => state.cake.numOfCake)
  const data1 = useSelector(state => state.choco.numOfChoco)

  const dispatch = useDispatch()

  console.log(data);



  return (
    <div className='flex'>
      {/* <div>
        <h1 className='btn'>NumOfCakes = {props.numOfCake}</h1>
        <button className='btn' onClick={props.buy_cake}>CakeIncrement</button>
      </div>
      <div>
        <h1 className='btn'>NumOfCakes = {props.numOfChoco}</h1>
        <button className='btn' onClick={props.buy_choco}>ChocoIncrement</button>
      </div> */}
      <div>
        <h1 className='btn'>NumOfCakes ={data}</h1>
        <button className='btn'onClick={() => dispatch(buy_cake())} >CakeIncrement</button>
      </div>
      <div>
        <h1 className='btn'>NumOfChoco = {data1}</h1>
        <button className='btn' onClick={() => dispatch(buy_choco())} >ChocoIncrement</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     numOfCake: state.cake.numOfCake,
//     numOfChoco:state.choco.numOfChoco
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buy_cake: () => dispatch(buy_cake()),
//     buy_choco:() => dispatch(buy_choco())
//   }
// }

export default CakeContainer
