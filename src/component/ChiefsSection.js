import React from 'react'
import ChiefCarde from './ChiefCarde'

const ChiefsSection = () => {
    const Chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/male-chef.jpg",
            recipesCount: "10",
            cuisine: "Mexican"
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/chef-7.avif",
            recipesCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Erich Maria",
            img: "/img/top-chiefs/man.avif",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Chris Brown",
            img: "/img/top-chiefs/medium.avif",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Black Lively",
            img: "/img/top-chiefs/medium-sho0.avif",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chiefs/smiley.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
  return (
    <div className='section chiefs'>
       <h1 className='title'> Our Top Chiefs</h1>
       <div className='top-chiefs-container'>
        {/* <ChiefCarde/> */}
        {Chiefs.map(chief => <ChiefCarde key={chief.name} chief={chief}/> )}
        
       </div>
    </div>
  )
}

export default ChiefsSection