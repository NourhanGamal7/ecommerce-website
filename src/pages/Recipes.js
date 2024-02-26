import React from 'react'
import PreviousSearches from '../component/PreviousSearches'
import RecipesCard from '../component/RecipesCard'
const Recipes = () => {
  const recipes = [
    {
     title: "Chicken Pan Pizza",
     image: "/img/gallery/side.jpg",
     autherImg: "/img/top-chiefs/smiley.jpg"
    },
    {
     title: "Spaghetti and Meatballs",
     image: "/img/gallery/1000_F_.jpg",
     autherImg: "/img/top-chiefs/chef-7.avif"
    },
    
    {
     title: "Mutton Biriyani",
     image: "/img/gallery/top-view.avif",
     autherImg: "/img/top-chiefs/UnlYznk.jpg"
    },
    {
     title: "Japanese Sushi",
     image: "/img/gallery/sushi7.avif",
     autherImg: "/img/top-chiefs/medium.avif"
    },
    {
      title: "Pasta",
      image: "/img/gallery/fresh.avif",
      autherImg: "/img/top-chiefs/male-chef.jpg"
     },
    {
     title: "Chicken Pan Pizza",
     image: "/img/gallery/side.jpg",
     autherImg: "/img/top-chiefs/smiley.jpg"
    },
    {
     title: "Spaghetti and Meatballs",
     image: "/img/gallery/1000_F_.jpg",
     autherImg: "/img/top-chiefs/chef-7.avif"
    },
    {
     title: "Pasta",
     image: "/img/gallery/fresh.avif",
     autherImg: "/img/top-chiefs/male-chef.jpg"
    },
    {
     title: "Eggs",
     image: "/img/gallery/fried-egg-.jpg",
     autherImg: "/img/top-chiefs/medium-sho0.avif"
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/plate.jpg",
      autherImg: "/img/top-chiefs/medium.avif"
     }
 ].sort(() => Math.random() - 0.5)
  return (
    <div>
      <PreviousSearches/>
      <div className='recipes-container'>
        {/*  */}

        {recipes.map((recipe, index) => (
          <RecipesCard key={index} recipe={recipe} />
        ))}
        
      </div>
    </div>
  )
}

export default Recipes