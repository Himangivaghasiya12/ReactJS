import React from 'react'
import style from './card.module.css'

const Card = () => {

    const back = {
      backgroundColor:'gray'
    }


  return (
    <div style={back}>
      <div >
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      </div>
      <div>
        <h1>Freepik Image</h1>
        <p>An image is a visual representation. An image can be two-dimensional, such as a drawing, painting, or photograph, or three-dimensional, such as a carving or ...</p>
        <span>
          <a className={style.link} href="">View More</a>
        </span>
      </div>
    </div>
  )
}

export default Card
