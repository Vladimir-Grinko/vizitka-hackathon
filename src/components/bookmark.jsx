import React from 'react'
import PropTypes from 'prop-types'
import PersonCard from './personCard'

const Bookmark = ({ persons, onBookmark }) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {persons.map((person) => {
          return <PersonCard person={person} key={person._id} onBookmark={onBookmark} />
        })}
      </div>
    </>
  )
}
Bookmark.propTypes = { persons: PropTypes.array.isRequired }
export default Bookmark
