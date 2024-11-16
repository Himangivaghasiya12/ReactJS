import React from 'react'

const ProductData = [
  "Clothes",
  "Education",
  "Food",
  "Finance",
  "Gardening",
 " Graphic design",
  "Hair & beauty",
  "Health",
  "Hospitality",
  "Information technology",
  "Music"
]

const List_Rendering = () => {

  const ProductList = ProductData.map((list) => <li className='text-center'>{list}</li>)

  return (
    <div>
       <h1 className='text-4xl text-center font-black bg-blue-500 p-2'>React List Rendering</h1>
      <ul className='bg-slate-300'>
        {/* {
          ProductData.map((list) => {
            return(
              <li key={list} className='text-center'>{list}</li>
            )
          })
        } */}

        {ProductList}
      </ul>
    </div>
  )
}

export default List_Rendering
