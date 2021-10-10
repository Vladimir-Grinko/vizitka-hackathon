import React from 'react'
import Proptypes from 'prop-types'

const Badge = ({ color, context, status }) => {
  let classNames = 'm-1 badge bg-'
  classNames += color
  return (
    <span className={classNames}>
      {context}
      {status && <i className="bi bi-check-square-fill"></i>}
    </span>
  )
}

Badge.propTypes = {
  color: Proptypes.string.isRequired,
  context: Proptypes.string.isRequired,
  status: Proptypes.bool
}

export default Badge
