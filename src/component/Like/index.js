import React, { useState } from 'react'

import HeartIcon from '../icons/Heart'
import './index.css'

const Like = () => {
  const [liked, setLiked] = useState(false)
  
  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="like__icon-container">
      <HeartIcon
        fill={liked ? '#FF5855' : '#9b9b9b'}
        onClick={handleLike}
      />
    </div>
  )
}

export default Like