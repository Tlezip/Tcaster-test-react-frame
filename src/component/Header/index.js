import React from 'react';
import { find, get } from 'lodash'
import { string } from 'prop-types'

import Like from '../Like'
import faculties from '../../utils/faculty'
import './index.css'


const Header = ({ faculty, bachelor, university }) => {
  const facultyData = find(faculties, facultyData => facultyData.facultyKey === faculty)
  const facultyLogo = get(facultyData, 'logo', '')
  const facultyName = get(facultyData, 'facultyName', '')
  return (
    <div className="header">
      {facultyLogo && (
        <div className="header__faculty-logo">
          <img src={facultyLogo} alt={facultyName} />
        </div>
      )}
      <div className="header__university-details">
        <div className="header__faculty-bachelor-container">
          <p className="header__faculty-name">
            {facultyName}
          </p>
          <p className="header__bachelor-name">
            {bachelor}
          </p>
        </div>
        <div className="header__university-container">
          <p className="header__university-name">
            {university}
          </p>
        </div>
      </div>
      <div className="header__like-container">
        <Like />
      </div>
    </div>
  )
}

Header.propTypes = {
  faculty: string,
  bachelor: string,
  university: string
}

export default Header