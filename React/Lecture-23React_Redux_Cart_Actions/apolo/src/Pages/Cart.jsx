import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../reduxCore/cartRedux/cartActions'

const Cart = () => {

  const data = useSelector((state => state.cart))
  console.log('cartData', data);
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='title'>This is Cart Page</h1>
      <div className='flex m-4 justify-between'>
        <div>
          <table className='w-[1200px] text-center mt-12 mx-auto'>
            <thead className='border-2 border-solid border-gray-500'>
              <tr>
                <th>ProductImage</th>
                <th>ProductTitle</th>
                <th>ProductPrice</th>
                <th>ProductRemove</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => {
                  return (
                    <tr className='border-2 border-solid border-gray-500'>
                      <td>
                        <img className='size-36 mx-auto' src={item.image} alt="" />
                      </td>
                      <td>
                        <span>{item.title}</span>
                      </td>
                      <td>
                        <span>{item.price}</span>
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
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart
