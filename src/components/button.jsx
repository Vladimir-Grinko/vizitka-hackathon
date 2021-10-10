import React from 'react'

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

export default Button
