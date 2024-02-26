import React from 'react'

const Footer = () => {
  return (
    <div className='footer container'>
        <div className='footer-section'>
            <p className='title'>FoodiesHub.com</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui nemo odio eveniet numquam nihil vel impedit
                ratione labore facere corporis
            </p>
            <p>&copy; 2024 | All Rights Reserved</p>
        </div>
        <div className='footer-section'>
            <p className='title'>Contact Us</p>
            <p> FoodiesHub@gmail.com </p>
            <p> +34256780-7893 </p>
            <p> 3425 Street NYC </p>
        </div>
        <div className='footer-section'>
            <p className='title'>Social</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>inestagram</p>
        </div>
    </div>
  )
}

export default Footer