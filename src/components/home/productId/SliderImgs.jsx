import React, { useState } from 'react'
import "./sliderImg.css"

const SliderImgs = ({product}) => {

  const [numberImg, setNumberImg] = useState(1);

  let objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`
  }
  
  const handlePrevious = () => {
    numberImg === 0 ? setNumberImg(2) : setNumberImg(numberImg-1)
  }



  const handleNext = () => {
    numberImg === 2 ? setNumberImg(0) : setNumberImg(numberImg+1)
  }




    return (
    <div className='slider'>

      <div onClick={handlePrevious} className='slider__arrowhead slider__left'>&#60;</div>

      <div style={objStyle} className="slider__interior">


        {
          product?.images.map(imgInfo => (
            <div key={imgInfo.id}  className='slider__img-container'>
              <img  
                className='slider__img'  
                src={imgInfo.url} 
                alt=""
                />
            </div>

            )) 
        }

        </div>
          <div onClick={handleNext} className='slider__arrowhead slider__right'>&#62;</div>

    </div>
  )
}

export default SliderImgs