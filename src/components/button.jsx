import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, clickAction, nameButt }) => {
  let classNames = 'btn btn-'
  classNames += color
  return (
    <div>
      <button onClick={clickAction} type="button" className={classNames}>
        {nameButt}
      </button>
    </div>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  clickAction: PropTypes.func,
  nameButt: PropTypes.string
}

export default Button
