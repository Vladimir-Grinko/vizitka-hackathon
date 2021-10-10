import React from 'react'
import PropTypes from 'prop-types'
import Badge from './badge'
import Button from './button'
import { Link } from 'react-router-dom'

const PersonCard = ({ person, onBookmark }) => {
  return (
    <div className="card col-3 me-2" style={{ width: '18rem' }}>
      <img
        src={person.image}
        className="card-img-top"
        alt={`${person.firstName} ${person.lastName}`}
      />
      <div className="card-body">
        <Badge
          context={person.firstName + person.lastName}
          color={person.color}
          status={person.teamLeader}
        />
      </div>
      <div className="card-body d-flex justify-content-around">
        <Link to={'/person/' + person._id} className="btn btn-primary">
          Подробнее
        </Link>
        <Button
          color={person.bookmark ? 'success' : 'secondary'}
          nameButt={'Избранное'}
          clickAction={() => onBookmark(person._id)}
        />
      </div>
    </div>
  )
}

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
  onBookmark: PropTypes.func.isRequired
}

export default PersonCard
