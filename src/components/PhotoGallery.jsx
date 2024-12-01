import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const PhotoGallery = () => {
  //photos is an array of images
  const photos = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/1a-(2).jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/2b.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/13.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/15.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/12.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/14.jpg'
  ]

  return (
    <div className='p-2 mt-4 columns-1 md:columns-2 lg:columns-3'>

      {photos.map(
        (photo, index) => (
          < Link to={`/photo/${index}`} key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} className='mx-auto p-4' />
          </Link>
        )
      )}
    </div >
  )
}
