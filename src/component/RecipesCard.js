import React from 'react'
import CustemerImage from './CustemerImage'
const RecipesCard = ({recipe}) => {
   
  return (
    <div className='recipes-card'>
        <CustemerImage imgSrc={recipe.image} pt="65%" />
        <div className='recipes-card-info'>
            <img className='auther-img' src={recipe.autherImg} />
            <p className='recipes-title'>{recipe.title}</p>
            <p className='recipes-desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <a className='view-btn' href='#!'>VIEW RECIPE</a>
        </div>

    </div>
  )
}

export default RecipesCard