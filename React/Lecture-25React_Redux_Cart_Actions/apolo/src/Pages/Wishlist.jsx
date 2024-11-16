import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToWishlist } from '../reduxCore/wishlistRedux/wishlistActions'

const Wishlist = () => {

  const data = useSelector((state => state.wishlist))
  console.log('WishListData', data);

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='title'>This is Wishlist Page</h1>
      <div className='flex m-4 justify-between'>
        <div>
          <table className='w-[1200px] text-center mt-12 mx-auto'>
            <thead className='border-2 border-solid border-gray-500'>
              <tr>
                <th>ProductImage</th>
                <th>ProductTitle</th>
                <th>ProductToCart</th>
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
                        <button onClick={() => dispatch(removeToWishlist(item.id))} className='btn'>removeToWishlist</button>
                      </td>
                    </tr> 
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) 
}

export default Wishlist
