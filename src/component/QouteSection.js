import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
const QouteSection = () => {
  return (
    <div className='section qoute'>
        <p className='qoute-text'>
            <FontAwesomeIcon icon={faQuoteLeft} />
            Food is everything we are. it's an extenation of nationalist feeling.
            ethnic feeling.your personal history. your province,your region,your 
            tribe,your grandma. it's inseparabel from the get-go.
        </p>
        <p className='qoute-auther'>
            - Anthony Bourdain
        </p>
    </div>
  )
}

export default QouteSection