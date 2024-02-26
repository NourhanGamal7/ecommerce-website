import React from 'react'
import CustemerImage from './CustemerImage'

const HeroSection = () => {
  const images = [
    "/img/gallery/side.jpg",
    "/img/gallery/fresh.avif",
    "/img/gallery/1000_F_.jpg",
    "/img/gallery/UnlYznk.jpg",
    "/img/gallery/top.avif",
    "/img/gallery/spaghetti.avif",
    "/img/gallery/sush.avif",
    "/img/gallery/top-view.avif",
    "/img/gallery/fried-egg-.jpg"
  ]
  return (
    <div className='section hero'>
        <div className='col typography'>
           <h1 className='title'>
             What Are We About
           </h1>
            <p className='info'>
              Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quam ipsum fuga labore
                magni dolor modi nisi libero, earum accusamus 
            </p>
            <button className='btn'> EXPLORE NOW </button>
            
        </div>
        <div className='col gllery'>
          {images.map((src,index) => (

             <CustemerImage key={index} imgSrc ={src} pt={"90%"}/>
          ))}
           
            
        </div>
    </div>
  )
}

export default HeroSection