import React from 'react'

import Header from '../Header'
import Divider from '../Divider'
import AvailableRound from '../AvailableRound'
import Score from '../Score'
import ScoreRatio from '../ScoreRatio'
import Social from '../Social'
import './index.css'

const UniversityBlock = () => {
  return (
    <div className="university-block">
      <div className="university-block__header-container">
        <Header
          faculty="engineer"
          bachelor="สาขาวิศวกรรมทั่วไป"
          university="จุฬาลงกรณ์มหาวิทยาลัย"
        />
      </div>
      <Divider />
      <div className="university-block__available-round-container">
        <AvailableRound rounds={5} availableRounds={[1,2,4] } />
      </div>
      <div className="university-block__score-container">
        <Score
          title="รอบที่ 4 : Admission"
          score={23453}
          scores={
            [
              {
                type: 'lowest',
                score: 20845
              },
              {
                type: 'average',
                score: 21346
              },
              {
                type: 'highest',
                score: 23415
              }
            ]
          }
          year={60}
        />
      </div>
      <Divider />
      <div className="university__score-ratio">
        <ScoreRatio />
      </div>
      <Divider />
      <div className="university__social">
        <Social interestedPeople={10} />
      </div>
    </div>
  )
}

export default UniversityBlock