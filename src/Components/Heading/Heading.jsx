import React from 'react'
import './Heading.css'

const Heading = ({subtitle, title}) => {
  return (
    <div className='heading'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Heading
