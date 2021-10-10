import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './progressBar'
import ProgressCircle from './progressCircle'
import Select from './UI/select'

const ProgressList = ({ skills }) => {
  const [type, setType] = useState('circle')

  const getClass = () => {
    return type === 'circle' ? 'd-flex justify-content-around flex-wrap' : ''
  }

  const handleChange = (type) => {
    setType(type)
  }

  return (
    <div className="mt-4 p-3">
      <div className="d-flex justify-content-end align-items-center">
        <span className="me-2 fw-bolder text-secondary">Выбрать изображение:</span>
        <Select
          value={type}
          defaultValue="Круги"
          options={[
            { value: 'bar', name: 'Линии' },
            { value: 'circle', name: 'Круги' }
          ]}
          onChange={handleChange}
        />
      </div>
      <div className={getClass()}>
        {skills.map((skill) =>
          type === 'circle' ? (
            <ProgressCircle key={skill._id} {...skill.value} percent={skill.level} />
          ) : (
            <ProgressBar key={skill._id} {...skill.value} percent={skill.level} />
          )
        )}
      </div>
    </div>
  )
}

ProgressList.propTypes = {
  skills: PropTypes.array.isRequired
}

export default ProgressList
