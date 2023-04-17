import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <img src={require("../extra/meme_face.png")}alt="meme face" className="header_img" />
        <h1 className="header_title">Meme Generator</h1>
    </div>
  )
}

export default Header