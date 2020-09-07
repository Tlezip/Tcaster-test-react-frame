import React from 'react'

const ExportIcon = ({ width = 18, height = 23 }) => (
  <svg width={width} height={height} viewBox="0 0 18 23">
    <g fill="none" fillRule="evenodd">
        <path fill="#F3F3F3" d="M-427-468H941v775H-427z" opacity=".2"/>
        <g transform="translate(-425 -468)">
            <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
            <use fill="#FFF" fillOpacity="0" xlinkHref="#b"/>
        </g>
        <g stroke="#404042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.577">
            <path d="M9 16V1L5 4.175M9 16V1l4 3.175"/>
            <path d="M13.55 10H17v12H1V10h3.45"/>
        </g>
    </g>
  </svg>
)

export default ExportIcon