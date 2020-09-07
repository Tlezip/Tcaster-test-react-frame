import React from 'react'
import { map, get, size } from 'lodash'

import ScoreIcon from '../icons/Score'
import MedalIcon from '../icons/Medal'
import './index.css'

const numberWithCommas = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const getScoreTypeText = type => {
  switch (type) {
    case 'lowest':
      return 'คะแนนต่ำสุด'
    case 'average':
      return 'คะแนนเฉลี่ย'
    case 'highest':
      return 'คะแนนสูงสุด'
    default:
      return ''
  }
}

const Score = ({ score, title, scores, year }) => {
  return (
    <div className="score">
      <div className="score__header">
        <p className="score__header-title">{title}</p>
        <button className="score__button">
          <p className="score__button-title">แก้ไขคะแนน</p>
          <ScoreIcon />
        </button>
      </div>
      <div className="score__content">
        <div className="score__content-logo">
          <MedalIcon />
        </div>
        <div className="score__content-your-score-container">
          <p>คะแนนของคุณคือ</p>
          <p className="score__content-your-score">{numberWithCommas(score)}</p>
        </div>
      </div>
      <div className="score__range">
        {
          map(scores, (scoreRange, index) => {
            const isLastScoreRange = index === (size(scores) - 1)
            return (
              <>
                <div className="score__range-block">
                  <p className="score__range-score">{numberWithCommas(get(scoreRange, 'score', ''))}</p>
                  <p className="score__range-year">
                    {`${getScoreTypeText(get(scoreRange, 'type', ''))} ${year}`}
                  </p>
                </div>
                {!isLastScoreRange && (
                  <div className="score__range-divider" />
                )}
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Score