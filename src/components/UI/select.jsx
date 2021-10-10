import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className="me-3">
      <select
        className="form-select form-select-sm"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select
