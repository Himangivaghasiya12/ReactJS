import React from 'react'
import { useSelector  , useDispatch } from 'react-redux'
import { removeToCart } from '../reduxCore/cartRedux/cartActions';

const Cart = () => {

  const data = useSelector(state => state.cart)
  console.log('cartData'  , data);

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='title'>This is Cart Page</h1>
      {
          data.flat().map((item) => {
            return (
              <div key={item.id} className='my-8 shadow-lg'>
                <div className='border-2 border-gray-300'>
                  <div className='bg-gray-400 text-center'>
                    <div>
                      <img className='size-72' src={item.image} alt="" />
                    </div>
                    <div className='p-4'>
                      <div className='text-white font-bold'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                      </div>
                      <div className='mt-2'>
                        <button onClick={() => dispatch(removeToCart(item.id))} className='btn font-bold'>removeToCart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )
        } 
    </div>
  )
}

export default Cart
