import React from 'react'
import { times, reduce, get } from 'lodash'

import './index.css'

const AvailableRound = ({ rounds = 10, availableRounds = [] }) => {
  const convertedAvailableRounds = reduce(availableRounds, (acc, round) => {
    return {
      ...acc,
      [round]: true
    }
  }, {})
  return (
    <div className="available-round">
      <div className="available-round__text-container">
        <p className="available-round__text">รอบที่เปิด</p>
      </div>
      <div className="available-round__round-container">
        {
          times(rounds, index => {
            const roundNumber = index + 1
            const isAvailable = get(convertedAvailableRounds, `${roundNumber}`, false)
            return (
              <div
                className={`available-round__round ${isAvailable ? 'available-round__round--available' : ''}`}
                key={`avaible-round-${roundNumber}`}
              >
                {roundNumber}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AvailableRound