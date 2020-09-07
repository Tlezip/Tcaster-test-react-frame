import React from 'react'

import ExportIcon from '../icons/Export'
import './index.css'

const Social = ({ interestedPeople = 0 }) => (
  <div className="social">
    <div className="social__interested-people">
      <p>{`${interestedPeople ? interestedPeople : ''} คนที่สนใจ`}</p>
    </div>
    <div className="social__share">
      <ExportIcon />
    </div>
  </div>
)

export default Social