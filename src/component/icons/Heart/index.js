import React from 'react'

const HeartIcon = ({ width = 24, height = 21, fill = '#FF5855', ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 21"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
        <path fill="#F3F3F3" d="M-422-39H946v775H-422z" opacity=".2"/>
        <g transform="translate(-420 -39)">
            <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
            <use fill="#FFF" fillOpacity="0" xlinkHref="#b"/>
        </g>
        <path fill={fill} stroke={fill} strokeWidth="1.28" d="M6.255 1c-.447 0-.894.056-1.325.17a5.31 5.31 0 0 0-3.368 2.773C.753 5.606.82 7.76 1.745 9.855c.856 1.939 2.341 3.878 4.416 5.764a31.782 31.782 0 0 0 2.968 2.397c.067.047.187.137.345.255.48.36 1.827 1.367 2.526 1.729.7-.362 2.047-1.37 2.526-1.729.158-.118.278-.208.345-.255a31.745 31.745 0 0 0 2.968-2.397c2.075-1.886 3.56-3.825 4.416-5.764.925-2.094.992-4.249.183-5.912A5.31 5.31 0 0 0 19.07 1.17a5.349 5.349 0 0 0-4.133.62 54.45 54.45 0 0 0-2.448 2.023L12 4.26l-.49-.447c-.6-.55-2.241-1.88-2.447-2.024A5.347 5.347 0 0 0 6.255 1z"/>
        <text fill="#FF5A5A" fontFamily="Prompt-SemiBold, Prompt" fontSize="24" fontWeight="500" transform="translate(-280 2)">
            <tspan x=".624" y="26">คณะวิศวกรรมศาสตร์</tspan>
        </text>
    </g>
  </svg>
)

export default HeartIcon