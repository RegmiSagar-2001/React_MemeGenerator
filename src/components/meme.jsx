import React from 'react'

const Meme = (props) => {
  return (
    <div className='meme'>
        <img src={props.img} alt='meme' className='meme-img'/>
        <h2 className="meme-upperText meme-text">{props.upperText}</h2>
        <h2 className="meme-lowerText meme-text">{props.lowerText}</h2>
    </div>
  )
}

export default Meme

