import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart, emptyCart, incrementToCart, decrementToCart } from '../reduxCore/cartRedux/cartActions'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const cartdata = useSelector((state => state.cart))
  console.log('cartData', cartdata);
  const dispatch = useDispatch()

  const amount = cartdata.length && cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)

  console.log(amount);

  return (
    <div className='m-4'>
      <h1 className='title'>This is Cart Page</h1>
      <button className='btn mt-2' onClick={() => dispatch(emptyCart())}>EmptyCart</button>
      {
        cartdata.length == 0 ?
          (
            <div>
              <div className='text-center text-4xl'>CartIsEmpty</div>
              <button className='btn' onClick={() => navigate('/shop')}>BackToShop</button>
            </div>
          )
          :
          (
            <div>
              <div className='flex  justify-between'>
                <div>
                  <table className='w-[1200px] text-center mt-12 mx-auto'>
                    <thead className='border-2 border-solid border-gray-500'>
                      <tr>
                        <th>ProductImage</th>
                        <th>ProductTitle</th>
                        <th>ProductQuantity</th>
                        <th>ProductPrice</th>
                        <th>ProductRemove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartdata.map((item) => {
                          return (
                            <tr className='border-2 border-solid border-gray-500' key={item.id}>
                              <td>
                                <img className='size-36 mx-auto' src={item.image} alt="" />
                              </td>
                              <td>
                                <span>{item.title}</span>
                              </td>
                              <td>
                                <button onClick={() => dispatch(incrementToCart(item.id))} className='text-2xl me-4'>+</button>
                                <span className='text-2xl'>{item.quantity}</span>
                                <button onClick={() => dispatch(decrementToCart(item.id))} className='text-4xl ms-4'>-</button>
                              </td>
                              <td>
                                <span>${item.price * item.quantity}</span>
                              </td>
                              <td>
                                <button onClick={() => dispatch(removeToCart(item.id))} className='btn'>removeToCart</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                <div className='w-[300px]'>
                  <table className='mt-12'>
                    <thead>
                      <tr>
                        <th>Total Price</th>
                      </tr>
                      <tr>
                        <th>${amount}</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          )
      }

    </div>
  )
}

export default Cart
