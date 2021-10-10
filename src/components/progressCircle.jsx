import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressBar = ({ name, percent, color, image }) => {
  return (
    <div style={{ width: 200, height: 200, margin: '15px' }}>
      <CircularProgressbarWithChildren
        value={percent}
        styles={buildStyles({
          pathColor: `${color}`,
          trailColor: '#e9ecef',
          strokeLinecap: 'butt'
        })}>
        <img style={{ width: 50, height: 50, objectFit: 'contain' }} src={image} alt={name} />
        <div style={{ fontSize: '18px', marginTop: 5 }}>
          <strong style={{ color: `${color}` }}>{`${percent}% ${name}`}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}

ProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProgressBar
