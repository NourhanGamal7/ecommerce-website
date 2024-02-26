import React from 'react'

const CustemerImage = ({imgSrc , pt}) => {
  return (
    <div className='custom-image' style={{paddingTop: pt}} >
        <img src={imgSrc} alt='imgSrc'/>
    </div>
  )
}

export default CustemerImage